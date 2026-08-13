# `odbCloudExadataInfrastructure` Submodule <a name="`odbCloudExadataInfrastructure` Submodule" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudExadataInfrastructure <a name="OdbCloudExadataInfrastructure" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructure(Construct Scope, string Id, OdbCloudExadataInfrastructureConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig">OdbCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig">OdbCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci">PutCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci">ResetCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType">ResetDatabaseServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType">ResetStorageServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerContactsToSendToOci` <a name="PutCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci"></a>

```csharp
private void PutCustomerContactsToSendToOci(IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(OdbCloudExadataInfrastructureMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags"></a>

```csharp
private void PutTags(IResolvable|OdbCloudExadataInfrastructureTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetCustomerContactsToSendToOci` <a name="ResetCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci"></a>

```csharp
private void ResetCustomerContactsToSendToOci()
```

##### `ResetDatabaseServerType` <a name="ResetDatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType"></a>

```csharp
private void ResetDatabaseServerType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetShape` <a name="ResetShape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetShape"></a>

```csharp
private void ResetShape()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount"></a>

```csharp
private void ResetStorageCount()
```

##### `ResetStorageServerType` <a name="ResetStorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType"></a>

```csharp
private void ResetStorageServerType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudExadataInfrastructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudExadataInfrastructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudExadataInfrastructure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OdbCloudExadataInfrastructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbCloudExadataInfrastructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGBs">AvailableStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn">CloudExadataInfrastructureArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerIds">DbServerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion">DbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference">OdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount">MaxCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTBs">MaxDataStorageInTBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs">MaxDbNodeStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGBs">MaxMemoryInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion">StorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList">OdbCloudExadataInfrastructureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGBs">TotalStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput">CustomerContactsToSendToOciInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput">DatabaseServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput">StorageCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput">StorageServerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType">DatabaseServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount">StorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType">StorageServerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount"></a>

```csharp
public double ActivatedStorageCount { get; }
```

- *Type:* double

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount"></a>

```csharp
public double AdditionalStorageCount { get; }
```

- *Type:* double

---

##### `AvailableStorageSizeInGBs`<sup>Required</sup> <a name="AvailableStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGBs"></a>

```csharp
public double AvailableStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `CloudExadataInfrastructureArn`<sup>Required</sup> <a name="CloudExadataInfrastructureArn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn"></a>

```csharp
public string CloudExadataInfrastructureArn { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci"></a>

```csharp
public OdbCloudExadataInfrastructureCustomerContactsToSendToOciList CustomerContactsToSendToOci { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a>

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTBs"></a>

```csharp
public double DataStorageSizeInTBs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs"></a>

```csharp
public double DbNodeStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `DbServerIds`<sup>Required</sup> <a name="DbServerIds" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerIds"></a>

```csharp
public string[] DbServerIds { get; }
```

- *Type:* string[]

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion"></a>

```csharp
public string DbServerVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow"></a>

```csharp
public OdbCloudExadataInfrastructureMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference">OdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount"></a>

```csharp
public double MaxCpuCount { get; }
```

- *Type:* double

---

##### `MaxDataStorageInTBs`<sup>Required</sup> <a name="MaxDataStorageInTBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTBs"></a>

```csharp
public double MaxDataStorageInTBs { get; }
```

- *Type:* double

---

##### `MaxDbNodeStorageSizeInGBs`<sup>Required</sup> <a name="MaxDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs"></a>

```csharp
public double MaxDbNodeStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `MaxMemoryInGBs`<sup>Required</sup> <a name="MaxMemoryInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGBs"></a>

```csharp
public double MaxMemoryInGBs { get; }
```

- *Type:* double

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGBs"></a>

```csharp
public double MemorySizeInGBs { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion"></a>

```csharp
public string StorageServerVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags"></a>

```csharp
public OdbCloudExadataInfrastructureTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList">OdbCloudExadataInfrastructureTagsList</a>

---

##### `TotalStorageSizeInGBs`<sup>Required</sup> <a name="TotalStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGBs"></a>

```csharp
public double TotalStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `CustomerContactsToSendToOciInput`<sup>Optional</sup> <a name="CustomerContactsToSendToOciInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci[] CustomerContactsToSendToOciInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]

---

##### `DatabaseServerTypeInput`<sup>Optional</sup> <a name="DatabaseServerTypeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput"></a>

```csharp
public string DatabaseServerTypeInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput"></a>

```csharp
public double StorageCountInput { get; }
```

- *Type:* double

---

##### `StorageServerTypeInput`<sup>Optional</sup> <a name="StorageServerTypeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput"></a>

```csharp
public string StorageServerTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DatabaseServerType`<sup>Required</sup> <a name="DatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType"></a>

```csharp
public string DatabaseServerType { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount"></a>

```csharp
public double StorageCount { get; }
```

- *Type:* double

---

##### `StorageServerType`<sup>Required</sup> <a name="StorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType"></a>

```csharp
public string StorageServerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudExadataInfrastructureConfig <a name="OdbCloudExadataInfrastructureConfig" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AvailabilityZone = null,
    string AvailabilityZoneId = null,
    double ComputeCount = null,
    IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci[] CustomerContactsToSendToOci = null,
    string DatabaseServerType = null,
    string DisplayName = null,
    OdbCloudExadataInfrastructureMaintenanceWindow MaintenanceWindow = null,
    string Shape = null,
    double StorageCount = null,
    string StorageServerType = null,
    IResolvable|OdbCloudExadataInfrastructureTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The name of the Availability Zone (AZ) where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | The AZ ID of the AZ where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount">ComputeCount</a></code> | <code>double</code> | The number of database servers for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]</code> | The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType">DatabaseServerType</a></code> | <code>string</code> | The database server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-friendly name for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape">Shape</a></code> | <code>string</code> | The model name of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount">StorageCount</a></code> | <code>double</code> | The number of storage servers that are activated for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType">StorageServerType</a></code> | <code>string</code> | The storage server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]</code> | Tags to assign to the Exadata Infrastructure. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The name of the Availability Zone (AZ) where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone OdbCloudExadataInfrastructure#availability_zone}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

The AZ ID of the AZ where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id OdbCloudExadataInfrastructure#availability_zone_id}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

The number of database servers for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#compute_count OdbCloudExadataInfrastructure#compute_count}

---

##### `CustomerContactsToSendToOci`<sup>Optional</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci[] CustomerContactsToSendToOci { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]

The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci OdbCloudExadataInfrastructure#customer_contacts_to_send_to_oci}

---

##### `DatabaseServerType`<sup>Optional</sup> <a name="DatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType"></a>

```csharp
public string DatabaseServerType { get; set; }
```

- *Type:* string

The database server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#database_server_type OdbCloudExadataInfrastructure#database_server_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-friendly name for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#display_name OdbCloudExadataInfrastructure#display_name}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow"></a>

```csharp
public OdbCloudExadataInfrastructureMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window OdbCloudExadataInfrastructure#maintenance_window}

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

The model name of the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#shape OdbCloudExadataInfrastructure#shape}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount"></a>

```csharp
public double StorageCount { get; set; }
```

- *Type:* double

The number of storage servers that are activated for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#storage_count OdbCloudExadataInfrastructure#storage_count}

---

##### `StorageServerType`<sup>Optional</sup> <a name="StorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType"></a>

```csharp
public string StorageServerType { get; set; }
```

- *Type:* string

The storage server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type OdbCloudExadataInfrastructure#storage_server_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]

Tags to assign to the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}

---

### OdbCloudExadataInfrastructureCustomerContactsToSendToOci <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureCustomerContactsToSendToOci {
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email">Email</a></code> | <code>string</code> | The email address of the contact. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#email OdbCloudExadataInfrastructure#email}

---

### OdbCloudExadataInfrastructureMaintenanceWindow <a name="OdbCloudExadataInfrastructureMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureMaintenanceWindow {
    double CustomActionTimeoutInMins = null,
    string[] DaysOfWeek = null,
    double[] HoursOfDay = null,
    bool|IResolvable IsCustomActionTimeoutEnabled = null,
    double LeadTimeInWeeks = null,
    string[] Months = null,
    string PatchingMode = null,
    string Preference = null,
    double[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | The timeout duration for custom actions in minutes. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether custom action timeout is enabled. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months">Months</a></code> | <code>string[]</code> | The months when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode">PatchingMode</a></code> | <code>string</code> | The patching mode for the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference">Preference</a></code> | <code>string</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | The weeks of the month when maintenance can be performed. |

---

##### `CustomActionTimeoutInMins`<sup>Optional</sup> <a name="CustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; set; }
```

- *Type:* double

The timeout duration for custom actions in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#custom_action_timeout_in_mins OdbCloudExadataInfrastructure#custom_action_timeout_in_mins}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#days_of_week OdbCloudExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#hours_of_day OdbCloudExadataInfrastructure#hours_of_day}

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```csharp
public bool|IResolvable IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether custom action timeout is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OdbCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `LeadTimeInWeeks`<sup>Optional</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; set; }
```

- *Type:* double

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#lead_time_in_weeks OdbCloudExadataInfrastructure#lead_time_in_weeks}

---

##### `Months`<sup>Optional</sup> <a name="Months" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months"></a>

```csharp
public string[] Months { get; set; }
```

- *Type:* string[]

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#months OdbCloudExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

The patching mode for the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#patching_mode OdbCloudExadataInfrastructure#patching_mode}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#preference OdbCloudExadataInfrastructure#preference}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#weeks_of_month OdbCloudExadataInfrastructure#weeks_of_month}

---

### OdbCloudExadataInfrastructureTags <a name="OdbCloudExadataInfrastructureTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#value OdbCloudExadataInfrastructure#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudExadataInfrastructureCustomerContactsToSendToOciList <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciList" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureCustomerContactsToSendToOciList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get"></a>

```csharp
private OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>[]

---


### OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>

---


### OdbCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="OdbCloudExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">ResetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">ResetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomActionTimeoutInMins` <a name="ResetCustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```csharp
private void ResetCustomActionTimeoutInMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetLeadTimeInWeeks` <a name="ResetLeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```csharp
private void ResetLeadTimeInWeeks()
```

##### `ResetMonths` <a name="ResetMonths" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">CustomActionTimeoutInMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">LeadTimeInWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">CustomActionTimeoutInMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutInMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutInMinsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```csharp
public double CustomActionTimeoutInMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public bool|IResolvable IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LeadTimeInWeeksInput`<sup>Optional</sup> <a name="LeadTimeInWeeksInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```csharp
public double LeadTimeInWeeksInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```csharp
public string[] MonthsInput { get; }
```

- *Type:* string[]

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutInMins`<sup>Required</sup> <a name="CustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```csharp
public double CustomActionTimeoutInMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public bool|IResolvable IsCustomActionTimeoutEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureMaintenanceWindow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---


### OdbCloudExadataInfrastructureTagsList <a name="OdbCloudExadataInfrastructureTagsList" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get"></a>

```csharp
private OdbCloudExadataInfrastructureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>[]

---


### OdbCloudExadataInfrastructureTagsOutputReference <a name="OdbCloudExadataInfrastructureTagsOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OdbCloudExadataInfrastructureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbCloudExadataInfrastructureTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>

---



