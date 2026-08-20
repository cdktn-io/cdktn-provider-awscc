# `healthlakeFhirDatastore` Submodule <a name="`healthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.healthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeFhirDatastore <a name="HealthlakeFhirDatastore" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastore(Construct Scope, string Id, HealthlakeFhirDatastoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig">HealthlakeFhirDatastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig">HealthlakeFhirDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration">PutIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig">PutPreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration">PutSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName">ResetDatastoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration">ResetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig">ResetPreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration">ResetSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityProviderConfiguration` <a name="PutIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration"></a>

```csharp
private void PutIdentityProviderConfiguration(HealthlakeFhirDatastoreIdentityProviderConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `PutPreloadDataConfig` <a name="PutPreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig"></a>

```csharp
private void PutPreloadDataConfig(HealthlakeFhirDatastorePreloadDataConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `PutSseConfiguration` <a name="PutSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration"></a>

```csharp
private void PutSseConfiguration(HealthlakeFhirDatastoreSseConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags"></a>

```csharp
private void PutTags(IResolvable|HealthlakeFhirDatastoreTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

---

##### `ResetDatastoreName` <a name="ResetDatastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName"></a>

```csharp
private void ResetDatastoreName()
```

##### `ResetIdentityProviderConfiguration` <a name="ResetIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration"></a>

```csharp
private void ResetIdentityProviderConfiguration()
```

##### `ResetPreloadDataConfig` <a name="ResetPreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig"></a>

```csharp
private void ResetPreloadDataConfig()
```

##### `ResetSseConfiguration` <a name="ResetSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration"></a>

```csharp
private void ResetSseConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeFhirDatastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeFhirDatastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeFhirDatastore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

HealthlakeFhirDatastore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthlakeFhirDatastore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt">CreatedAt</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn">DatastoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint">DatastoreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId">DatastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus">DatastoreStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig">PreloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration">SseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput">DatastoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput">DatastoreTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput">IdentityProviderConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput">PreloadDataConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput">SseConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName">DatastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion">DatastoreTypeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt"></a>

```csharp
public HealthlakeFhirDatastoreCreatedAtOutputReference CreatedAt { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `DatastoreArn`<sup>Required</sup> <a name="DatastoreArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn"></a>

```csharp
public string DatastoreArn { get; }
```

- *Type:* string

---

##### `DatastoreEndpoint`<sup>Required</sup> <a name="DatastoreEndpoint" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```csharp
public string DatastoreEndpoint { get; }
```

- *Type:* string

---

##### `DatastoreId`<sup>Required</sup> <a name="DatastoreId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId"></a>

```csharp
public string DatastoreId { get; }
```

- *Type:* string

---

##### `DatastoreStatus`<sup>Required</sup> <a name="DatastoreStatus" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus"></a>

```csharp
public string DatastoreStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```csharp
public HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference IdentityProviderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `PreloadDataConfig`<sup>Required</sup> <a name="PreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig"></a>

```csharp
public HealthlakeFhirDatastorePreloadDataConfigOutputReference PreloadDataConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `SseConfiguration`<sup>Required</sup> <a name="SseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration"></a>

```csharp
public HealthlakeFhirDatastoreSseConfigurationOutputReference SseConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags"></a>

```csharp
public HealthlakeFhirDatastoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a>

---

##### `DatastoreNameInput`<sup>Optional</sup> <a name="DatastoreNameInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput"></a>

```csharp
public string DatastoreNameInput { get; }
```

- *Type:* string

---

##### `DatastoreTypeVersionInput`<sup>Optional</sup> <a name="DatastoreTypeVersionInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput"></a>

```csharp
public string DatastoreTypeVersionInput { get; }
```

- *Type:* string

---

##### `IdentityProviderConfigurationInput`<sup>Optional</sup> <a name="IdentityProviderConfigurationInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreIdentityProviderConfiguration IdentityProviderConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `PreloadDataConfigInput`<sup>Optional</sup> <a name="PreloadDataConfigInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput"></a>

```csharp
public IResolvable|HealthlakeFhirDatastorePreloadDataConfig PreloadDataConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `SseConfigurationInput`<sup>Optional</sup> <a name="SseConfigurationInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreSseConfiguration SseConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName"></a>

```csharp
public string DatastoreName { get; }
```

- *Type:* string

---

##### `DatastoreTypeVersion`<sup>Required</sup> <a name="DatastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```csharp
public string DatastoreTypeVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeFhirDatastoreConfig <a name="HealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DatastoreTypeVersion,
    string DatastoreName = null,
    HealthlakeFhirDatastoreIdentityProviderConfiguration IdentityProviderConfiguration = null,
    HealthlakeFhirDatastorePreloadDataConfig PreloadDataConfig = null,
    HealthlakeFhirDatastoreSseConfiguration SseConfiguration = null,
    IResolvable|HealthlakeFhirDatastoreTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion">DatastoreTypeVersion</a></code> | <code>string</code> | The FHIR version. Only R4 version data is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName">DatastoreName</a></code> | <code>string</code> | The user-generated name for the Data Store. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | The identity provider configuration for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig">PreloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration">SseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | The server-side encryption key configuration for a customer provided encryption key. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DatastoreTypeVersion`<sup>Required</sup> <a name="DatastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion"></a>

```csharp
public string DatastoreTypeVersion { get; set; }
```

- *Type:* string

The FHIR version. Only R4 version data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}

---

##### `DatastoreName`<sup>Optional</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName"></a>

```csharp
public string DatastoreName { get; set; }
```

- *Type:* string

The user-generated name for the Data Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}

---

##### `IdentityProviderConfiguration`<sup>Optional</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration"></a>

```csharp
public HealthlakeFhirDatastoreIdentityProviderConfiguration IdentityProviderConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

The identity provider configuration for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}

---

##### `PreloadDataConfig`<sup>Optional</sup> <a name="PreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig"></a>

```csharp
public HealthlakeFhirDatastorePreloadDataConfig PreloadDataConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}

---

##### `SseConfiguration`<sup>Optional</sup> <a name="SseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration"></a>

```csharp
public HealthlakeFhirDatastoreSseConfiguration SseConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

The server-side encryption key configuration for a customer provided encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}.

---

### HealthlakeFhirDatastoreCreatedAt <a name="HealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreCreatedAt {

};
```


### HealthlakeFhirDatastoreIdentityProviderConfiguration <a name="HealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreIdentityProviderConfiguration {
    string AuthorizationStrategy = null,
    bool|IResolvable FineGrainedAuthorizationEnabled = null,
    string IdpLambdaArn = null,
    string Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy">AuthorizationStrategy</a></code> | <code>string</code> | Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled">FineGrainedAuthorizationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to indicate if fine-grained authorization will be enabled for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn">IdpLambdaArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata">Metadata</a></code> | <code>string</code> | The JSON metadata elements for identity provider configuration. |

---

##### `AuthorizationStrategy`<sup>Optional</sup> <a name="AuthorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy"></a>

```csharp
public string AuthorizationStrategy { get; set; }
```

- *Type:* string

Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#authorization_strategy HealthlakeFhirDatastore#authorization_strategy}

---

##### `FineGrainedAuthorizationEnabled`<sup>Optional</sup> <a name="FineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled"></a>

```csharp
public bool|IResolvable FineGrainedAuthorizationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to indicate if fine-grained authorization will be enabled for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#fine_grained_authorization_enabled HealthlakeFhirDatastore#fine_grained_authorization_enabled}

---

##### `IdpLambdaArn`<sup>Optional</sup> <a name="IdpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn"></a>

```csharp
public string IdpLambdaArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#idp_lambda_arn HealthlakeFhirDatastore#idp_lambda_arn}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

The JSON metadata elements for identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#metadata HealthlakeFhirDatastore#metadata}

---

### HealthlakeFhirDatastorePreloadDataConfig <a name="HealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastorePreloadDataConfig {
    string PreloadDataType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType">PreloadDataType</a></code> | <code>string</code> | The type of preloaded data. Only Synthea preloaded data is supported. |

---

##### `PreloadDataType`<sup>Optional</sup> <a name="PreloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType"></a>

```csharp
public string PreloadDataType { get; set; }
```

- *Type:* string

The type of preloaded data. Only Synthea preloaded data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_type HealthlakeFhirDatastore#preload_data_type}

---

### HealthlakeFhirDatastoreSseConfiguration <a name="HealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreSseConfiguration {
    HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig KmsEncryptionConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig">KmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | The customer-managed-key (CMK) used when creating a Data Store. |

---

##### `KmsEncryptionConfig`<sup>Optional</sup> <a name="KmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig"></a>

```csharp
public HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig KmsEncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

The customer-managed-key (CMK) used when creating a Data Store.

If a customer owned key is not specified, an AWS owned key will be used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}

---

### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig {
    string CmkType = null,
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType">CmkType</a></code> | <code>string</code> | The type of customer-managed-key (CMK) used for encryption. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The KMS encryption key id/alias used to encrypt the Data Store contents at rest. |

---

##### `CmkType`<sup>Optional</sup> <a name="CmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType"></a>

```csharp
public string CmkType { get; set; }
```

- *Type:* string

The type of customer-managed-key (CMK) used for encryption.

The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#cmk_type HealthlakeFhirDatastore#cmk_type}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#kms_key_id HealthlakeFhirDatastore#kms_key_id}

---

### HealthlakeFhirDatastoreTags <a name="HealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#key HealthlakeFhirDatastore#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#value HealthlakeFhirDatastore#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeFhirDatastoreCreatedAtOutputReference <a name="HealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreCreatedAtOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">Seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```csharp
public string Seconds { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```csharp
public HealthlakeFhirDatastoreCreatedAt InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a>

---


### HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy">ResetAuthorizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled">ResetFineGrainedAuthorizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn">ResetIdpLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationStrategy` <a name="ResetAuthorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy"></a>

```csharp
private void ResetAuthorizationStrategy()
```

##### `ResetFineGrainedAuthorizationEnabled` <a name="ResetFineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled"></a>

```csharp
private void ResetFineGrainedAuthorizationEnabled()
```

##### `ResetIdpLambdaArn` <a name="ResetIdpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn"></a>

```csharp
private void ResetIdpLambdaArn()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput">AuthorizationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput">FineGrainedAuthorizationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput">IdpLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">AuthorizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">FineGrainedAuthorizationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">IdpLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationStrategyInput`<sup>Optional</sup> <a name="AuthorizationStrategyInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput"></a>

```csharp
public string AuthorizationStrategyInput { get; }
```

- *Type:* string

---

##### `FineGrainedAuthorizationEnabledInput`<sup>Optional</sup> <a name="FineGrainedAuthorizationEnabledInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput"></a>

```csharp
public bool|IResolvable FineGrainedAuthorizationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdpLambdaArnInput`<sup>Optional</sup> <a name="IdpLambdaArnInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput"></a>

```csharp
public string IdpLambdaArnInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `AuthorizationStrategy`<sup>Required</sup> <a name="AuthorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```csharp
public string AuthorizationStrategy { get; }
```

- *Type:* string

---

##### `FineGrainedAuthorizationEnabled`<sup>Required</sup> <a name="FineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```csharp
public bool|IResolvable FineGrainedAuthorizationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdpLambdaArn`<sup>Required</sup> <a name="IdpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```csharp
public string IdpLambdaArn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreIdentityProviderConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### HealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="HealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastorePreloadDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType">ResetPreloadDataType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreloadDataType` <a name="ResetPreloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType"></a>

```csharp
private void ResetPreloadDataType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput">PreloadDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">PreloadDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreloadDataTypeInput`<sup>Optional</sup> <a name="PreloadDataTypeInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput"></a>

```csharp
public string PreloadDataTypeInput { get; }
```

- *Type:* string

---

##### `PreloadDataType`<sup>Required</sup> <a name="PreloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```csharp
public string PreloadDataType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeFhirDatastorePreloadDataConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType">ResetCmkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmkType` <a name="ResetCmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType"></a>

```csharp
private void ResetCmkType()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput">CmkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">CmkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CmkTypeInput`<sup>Optional</sup> <a name="CmkTypeInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput"></a>

```csharp
public string CmkTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `CmkType`<sup>Required</sup> <a name="CmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```csharp
public string CmkType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreSseConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig">PutKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig">ResetKmsEncryptionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKmsEncryptionConfig` <a name="PutKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig"></a>

```csharp
private void PutKmsEncryptionConfig(HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `ResetKmsEncryptionConfig` <a name="ResetKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig"></a>

```csharp
private void ResetKmsEncryptionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">KmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput">KmsEncryptionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsEncryptionConfig`<sup>Required</sup> <a name="KmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```csharp
public HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference KmsEncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `KmsEncryptionConfigInput`<sup>Optional</sup> <a name="KmsEncryptionConfigInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig KmsEncryptionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreSseConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---


### HealthlakeFhirDatastoreTagsList <a name="HealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get"></a>

```csharp
private HealthlakeFhirDatastoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

---


### HealthlakeFhirDatastoreTagsOutputReference <a name="HealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new HealthlakeFhirDatastoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HealthlakeFhirDatastoreTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>

---



