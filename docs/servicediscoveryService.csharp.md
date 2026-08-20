# `servicediscoveryService` Submodule <a name="`servicediscoveryService` Submodule" id="@cdktn/provider-awscc.servicediscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryService <a name="ServicediscoveryService" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service awscc_servicediscovery_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryService(Construct Scope, string Id, ServicediscoveryServiceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig">ServicediscoveryServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig">ServicediscoveryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig">PutDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig">PutHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDnsConfig">ResetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckConfig">ResetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckCustomConfig">ResetHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetServiceAttributes">ResetServiceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDnsConfig` <a name="PutDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig"></a>

```csharp
private void PutDnsConfig(ServicediscoveryServiceDnsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig"></a>

```csharp
private void PutHealthCheckConfig(ServicediscoveryServiceHealthCheckConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---

##### `PutHealthCheckCustomConfig` <a name="PutHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig"></a>

```csharp
private void PutHealthCheckCustomConfig(ServicediscoveryServiceHealthCheckCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putHealthCheckCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags"></a>

```csharp
private void PutTags(IResolvable|ServicediscoveryServiceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsConfig` <a name="ResetDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetDnsConfig"></a>

```csharp
private void ResetDnsConfig()
```

##### `ResetHealthCheckConfig` <a name="ResetHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckConfig"></a>

```csharp
private void ResetHealthCheckConfig()
```

##### `ResetHealthCheckCustomConfig` <a name="ResetHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetHealthCheckCustomConfig"></a>

```csharp
private void ResetHealthCheckCustomConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetServiceAttributes` <a name="ResetServiceAttributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetServiceAttributes"></a>

```csharp
private void ResetServiceAttributes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicediscoveryService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ServicediscoveryService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServicediscoveryService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicediscoveryService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicediscoveryService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference">ServicediscoveryServiceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference">ServicediscoveryServiceHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfig">HealthCheckCustomConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference">ServicediscoveryServiceHealthCheckCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList">ServicediscoveryServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfigInput">DnsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfigInput">HealthCheckCustomConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributesInput">ServiceAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributes">ServiceAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfig"></a>

```csharp
public ServicediscoveryServiceDnsConfigOutputReference DnsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference">ServicediscoveryServiceDnsConfigOutputReference</a>

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfig"></a>

```csharp
public ServicediscoveryServiceHealthCheckConfigOutputReference HealthCheckConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference">ServicediscoveryServiceHealthCheckConfigOutputReference</a>

---

##### `HealthCheckCustomConfig`<sup>Required</sup> <a name="HealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfig"></a>

```csharp
public ServicediscoveryServiceHealthCheckCustomConfigOutputReference HealthCheckCustomConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference">ServicediscoveryServiceHealthCheckCustomConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tags"></a>

```csharp
public ServicediscoveryServiceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList">ServicediscoveryServiceTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsConfigInput`<sup>Optional</sup> <a name="DnsConfigInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.dnsConfigInput"></a>

```csharp
public IResolvable|ServicediscoveryServiceDnsConfig DnsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckConfigInput"></a>

```csharp
public IResolvable|ServicediscoveryServiceHealthCheckConfig HealthCheckConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---

##### `HealthCheckCustomConfigInput`<sup>Optional</sup> <a name="HealthCheckCustomConfigInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.healthCheckCustomConfigInput"></a>

```csharp
public IResolvable|ServicediscoveryServiceHealthCheckCustomConfig HealthCheckCustomConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `ServiceAttributesInput`<sup>Optional</sup> <a name="ServiceAttributesInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tagsInput"></a>

```csharp
public IResolvable|ServicediscoveryServiceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `ServiceAttributes`<sup>Required</sup> <a name="ServiceAttributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.serviceAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryServiceConfig <a name="ServicediscoveryServiceConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    ServicediscoveryServiceDnsConfig DnsConfig = null,
    ServicediscoveryServiceHealthCheckConfig HealthCheckConfig = null,
    ServicediscoveryServiceHealthCheckCustomConfig HealthCheckCustomConfig = null,
    string Name = null,
    string NamespaceId = null,
    System.Collections.Generic.IDictionary<string, string> ServiceAttributes = null,
    IResolvable|ServicediscoveryServiceTags[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.description">Description</a></code> | <code>string</code> | A description for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dnsConfig">DnsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | DNS-related configurations for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | Settings for health checks. Used when routing is DNS-based. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckCustomConfig">HealthCheckCustomConfig</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | Settings for custom health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.name">Name</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | The ID of the namespace in which the service is created. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.serviceAttributes">ServiceAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A string map that contains attributes and values for the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]</code> | An array of key-value pairs to associate with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.type">Type</a></code> | <code>string</code> | The type of service. Supported values are HTTP or DNS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#description ServicediscoveryService#description}

---

##### `DnsConfig`<sup>Optional</sup> <a name="DnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.dnsConfig"></a>

```csharp
public ServicediscoveryServiceDnsConfig DnsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

DNS-related configurations for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#dns_config ServicediscoveryService#dns_config}

---

##### `HealthCheckConfig`<sup>Optional</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckConfig"></a>

```csharp
public ServicediscoveryServiceHealthCheckConfig HealthCheckConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

Settings for health checks. Used when routing is DNS-based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#health_check_config ServicediscoveryService#health_check_config}

---

##### `HealthCheckCustomConfig`<sup>Optional</sup> <a name="HealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.healthCheckCustomConfig"></a>

```csharp
public ServicediscoveryServiceHealthCheckCustomConfig HealthCheckCustomConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

Settings for custom health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#health_check_custom_config ServicediscoveryService#health_check_custom_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#name ServicediscoveryService#name}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

The ID of the namespace in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `ServiceAttributes`<sup>Optional</sup> <a name="ServiceAttributes" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.serviceAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A string map that contains attributes and values for the service.

You can specify a maximum of 30 key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#service_attributes ServicediscoveryService#service_attributes}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.tags"></a>

```csharp
public IResolvable|ServicediscoveryServiceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

An array of key-value pairs to associate with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#tags ServicediscoveryService#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of service. Supported values are HTTP or DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceDnsConfig <a name="ServicediscoveryServiceDnsConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceDnsConfig {
    IResolvable|ServicediscoveryServiceDnsConfigDnsRecords[] DnsRecords = null,
    string NamespaceId = null,
    string RoutingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.dnsRecords">DnsRecords</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]</code> | A list of DNS records associated with the service. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | The ID of the namespace for the DNS configuration. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.routingPolicy">RoutingPolicy</a></code> | <code>string</code> | The routing policy to use for DNS queries. |

---

##### `DnsRecords`<sup>Optional</sup> <a name="DnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.dnsRecords"></a>

```csharp
public IResolvable|ServicediscoveryServiceDnsConfigDnsRecords[] DnsRecords { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

A list of DNS records associated with the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#dns_records ServicediscoveryService#dns_records}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

The ID of the namespace for the DNS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#namespace_id ServicediscoveryService#namespace_id}

---

##### `RoutingPolicy`<sup>Optional</sup> <a name="RoutingPolicy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig.property.routingPolicy"></a>

```csharp
public string RoutingPolicy { get; set; }
```

- *Type:* string

The routing policy to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#routing_policy ServicediscoveryService#routing_policy}

---

### ServicediscoveryServiceDnsConfigDnsRecords <a name="ServicediscoveryServiceDnsConfigDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceDnsConfigDnsRecords {
    double Ttl = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.ttl">Ttl</a></code> | <code>double</code> | The time-to-live (TTL) for the DNS record. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.type">Type</a></code> | <code>string</code> | The DNS record type (e.g., A, AAAA, SRV). |

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The time-to-live (TTL) for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#ttl ServicediscoveryService#ttl}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The DNS record type (e.g., A, AAAA, SRV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceHealthCheckConfig <a name="ServicediscoveryServiceHealthCheckConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceHealthCheckConfig {
    double FailureThreshold = null,
    string ResourcePath = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | The number of consecutive health check failures that must occur before declaring the service unhealthy. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.resourcePath">ResourcePath</a></code> | <code>string</code> | The path to ping on the service for health checks. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.type">Type</a></code> | <code>string</code> | The type of health check (e.g., HTTP, HTTPS, TCP). |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

The number of consecutive health check failures that must occur before declaring the service unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.resourcePath"></a>

```csharp
public string ResourcePath { get; set; }
```

- *Type:* string

The path to ping on the service for health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#resource_path ServicediscoveryService#resource_path}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of health check (e.g., HTTP, HTTPS, TCP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#type ServicediscoveryService#type}

---

### ServicediscoveryServiceHealthCheckCustomConfig <a name="ServicediscoveryServiceHealthCheckCustomConfig" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceHealthCheckCustomConfig {
    double FailureThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | The number of consecutive health check failures required before the service is considered unhealthy. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

The number of consecutive health check failures required before the service is considered unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#failure_threshold ServicediscoveryService#failure_threshold}

---

### ServicediscoveryServiceTags <a name="ServicediscoveryServiceTags" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#key ServicediscoveryService#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/servicediscovery_service#value ServicediscoveryService#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryServiceDnsConfigDnsRecordsList <a name="ServicediscoveryServiceDnsConfigDnsRecordsList" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceDnsConfigDnsRecordsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get"></a>

```csharp
private ServicediscoveryServiceDnsConfigDnsRecordsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceDnsConfigDnsRecords[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

---


### ServicediscoveryServiceDnsConfigDnsRecordsOutputReference <a name="ServicediscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceDnsConfigDnsRecordsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceDnsConfigDnsRecords InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>

---


### ServicediscoveryServiceDnsConfigOutputReference <a name="ServicediscoveryServiceDnsConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceDnsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords">PutDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetDnsRecords">ResetDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetRoutingPolicy">ResetRoutingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsRecords` <a name="PutDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords"></a>

```csharp
private void PutDnsRecords(IResolvable|ServicediscoveryServiceDnsConfigDnsRecords[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.putDnsRecords.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

---

##### `ResetDnsRecords` <a name="ResetDnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetDnsRecords"></a>

```csharp
private void ResetDnsRecords()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetRoutingPolicy` <a name="ResetRoutingPolicy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.resetRoutingPolicy"></a>

```csharp
private void ResetRoutingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecords">DnsRecords</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList">ServicediscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput">DnsRecordsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicyInput">RoutingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicy">RoutingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsRecords`<sup>Required</sup> <a name="DnsRecords" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```csharp
public ServicediscoveryServiceDnsConfigDnsRecordsList DnsRecords { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecordsList">ServicediscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `DnsRecordsInput`<sup>Optional</sup> <a name="DnsRecordsInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput"></a>

```csharp
public IResolvable|ServicediscoveryServiceDnsConfigDnsRecords[] DnsRecordsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigDnsRecords">ServicediscoveryServiceDnsConfigDnsRecords</a>[]

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `RoutingPolicyInput`<sup>Optional</sup> <a name="RoutingPolicyInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicyInput"></a>

```csharp
public string RoutingPolicyInput { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```csharp
public string RoutingPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceDnsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceDnsConfig">ServicediscoveryServiceDnsConfig</a>

---


### ServicediscoveryServiceHealthCheckConfigOutputReference <a name="ServicediscoveryServiceHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceHealthCheckConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetResourcePath"></a>

```csharp
private void ResetResourcePath()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput">ResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```csharp
public string ResourcePathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceHealthCheckConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckConfig">ServicediscoveryServiceHealthCheckConfig</a>

---


### ServicediscoveryServiceHealthCheckCustomConfigOutputReference <a name="ServicediscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceHealthCheckCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceHealthCheckCustomConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceHealthCheckCustomConfig">ServicediscoveryServiceHealthCheckCustomConfig</a>

---


### ServicediscoveryServiceTagsList <a name="ServicediscoveryServiceTagsList" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get"></a>

```csharp
private ServicediscoveryServiceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>[]

---


### ServicediscoveryServiceTagsOutputReference <a name="ServicediscoveryServiceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ServicediscoveryServiceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ServicediscoveryServiceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicediscoveryService.ServicediscoveryServiceTags">ServicediscoveryServiceTags</a>

---



