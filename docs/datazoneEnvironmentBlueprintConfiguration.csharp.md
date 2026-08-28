# `datazoneEnvironmentBlueprintConfiguration` Submodule <a name="`datazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentBlueprintConfiguration <a name="DatazoneEnvironmentBlueprintConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfiguration(Construct Scope, string Id, DatazoneEnvironmentBlueprintConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig">DatazoneEnvironmentBlueprintConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig">DatazoneEnvironmentBlueprintConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations">PutProvisioningConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters">PutRegionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary">ResetEnvironmentRolePermissionBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters">ResetGlobalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn">ResetManageAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations">ResetProvisioningConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn">ResetProvisioningRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters">ResetRegionalParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisioningConfigurations` <a name="PutProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations"></a>

```csharp
private void PutProvisioningConfigurations(IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

---

##### `PutRegionalParameters` <a name="PutRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters"></a>

```csharp
private void PutRegionalParameters(IResolvable|DatazoneEnvironmentBlueprintConfigurationRegionalParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

---

##### `ResetEnvironmentRolePermissionBoundary` <a name="ResetEnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary"></a>

```csharp
private void ResetEnvironmentRolePermissionBoundary()
```

##### `ResetGlobalParameters` <a name="ResetGlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters"></a>

```csharp
private void ResetGlobalParameters()
```

##### `ResetManageAccessRoleArn` <a name="ResetManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn"></a>

```csharp
private void ResetManageAccessRoleArn()
```

##### `ResetProvisioningConfigurations` <a name="ResetProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations"></a>

```csharp
private void ResetProvisioningConfigurations()
```

##### `ResetProvisioningRoleArn` <a name="ResetProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn"></a>

```csharp
private void ResetProvisioningRoleArn()
```

##### `ResetRegionalParameters` <a name="ResetRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters"></a>

```csharp
private void ResetRegionalParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironmentBlueprintConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironmentBlueprintConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironmentBlueprintConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DatazoneEnvironmentBlueprintConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations">ProvisioningConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">RegionalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput">EnabledRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput">EnvironmentBlueprintIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput">EnvironmentRolePermissionBoundaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput">GlobalParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput">ManageAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput">ProvisioningConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput">ProvisioningRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput">RegionalParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">EnabledRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary">EnvironmentRolePermissionBoundary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters">GlobalParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">ManageAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```csharp
public string EnvironmentBlueprintId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProvisioningConfigurations`<sup>Required</sup> <a name="ProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations"></a>

```csharp
public DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList ProvisioningConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a>

---

##### `RegionalParameters`<sup>Required</sup> <a name="RegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```csharp
public DatazoneEnvironmentBlueprintConfigurationRegionalParametersList RegionalParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput"></a>

```csharp
public string DomainIdentifierInput { get; }
```

- *Type:* string

---

##### `EnabledRegionsInput`<sup>Optional</sup> <a name="EnabledRegionsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput"></a>

```csharp
public string[] EnabledRegionsInput { get; }
```

- *Type:* string[]

---

##### `EnvironmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="EnvironmentBlueprintIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput"></a>

```csharp
public string EnvironmentBlueprintIdentifierInput { get; }
```

- *Type:* string

---

##### `EnvironmentRolePermissionBoundaryInput`<sup>Optional</sup> <a name="EnvironmentRolePermissionBoundaryInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput"></a>

```csharp
public string EnvironmentRolePermissionBoundaryInput { get; }
```

- *Type:* string

---

##### `GlobalParametersInput`<sup>Optional</sup> <a name="GlobalParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GlobalParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ManageAccessRoleArnInput`<sup>Optional</sup> <a name="ManageAccessRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput"></a>

```csharp
public string ManageAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `ProvisioningConfigurationsInput`<sup>Optional</sup> <a name="ProvisioningConfigurationsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[] ProvisioningConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

---

##### `ProvisioningRoleArnInput`<sup>Optional</sup> <a name="ProvisioningRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput"></a>

```csharp
public string ProvisioningRoleArnInput { get; }
```

- *Type:* string

---

##### `RegionalParametersInput`<sup>Optional</sup> <a name="RegionalParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationRegionalParameters[] RegionalParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `EnabledRegions`<sup>Required</sup> <a name="EnabledRegions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```csharp
public string[] EnabledRegions { get; }
```

- *Type:* string[]

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier"></a>

```csharp
public string EnvironmentBlueprintIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentRolePermissionBoundary`<sup>Required</sup> <a name="EnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary"></a>

```csharp
public string EnvironmentRolePermissionBoundary { get; }
```

- *Type:* string

---

##### `GlobalParameters`<sup>Required</sup> <a name="GlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GlobalParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ManageAccessRoleArn`<sup>Required</sup> <a name="ManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```csharp
public string ManageAccessRoleArn { get; }
```

- *Type:* string

---

##### `ProvisioningRoleArn`<sup>Required</sup> <a name="ProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```csharp
public string ProvisioningRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentBlueprintConfigurationConfig <a name="DatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainIdentifier,
    string[] EnabledRegions,
    string EnvironmentBlueprintIdentifier,
    string EnvironmentRolePermissionBoundary = null,
    System.Collections.Generic.IDictionary<string, string> GlobalParameters = null,
    string ManageAccessRoleArn = null,
    IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[] ProvisioningConfigurations = null,
    string ProvisioningRoleArn = null,
    IResolvable|DatazoneEnvironmentBlueprintConfigurationRegionalParameters[] RegionalParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions">EnabledRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary">EnvironmentRolePermissionBoundary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters">GlobalParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Region-agnostic environment blueprint parameters. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn">ManageAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations">ProvisioningConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters">RegionalParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}.

---

##### `EnabledRegions`<sup>Required</sup> <a name="EnabledRegions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions"></a>

```csharp
public string[] EnabledRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier"></a>

```csharp
public string EnvironmentBlueprintIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}.

---

##### `EnvironmentRolePermissionBoundary`<sup>Optional</sup> <a name="EnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary"></a>

```csharp
public string EnvironmentRolePermissionBoundary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}.

---

##### `GlobalParameters`<sup>Optional</sup> <a name="GlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GlobalParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Region-agnostic environment blueprint parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#global_parameters DatazoneEnvironmentBlueprintConfiguration#global_parameters}

---

##### `ManageAccessRoleArn`<sup>Optional</sup> <a name="ManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn"></a>

```csharp
public string ManageAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `ProvisioningConfigurations`<sup>Optional</sup> <a name="ProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[] ProvisioningConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}.

---

##### `ProvisioningRoleArn`<sup>Optional</sup> <a name="ProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn"></a>

```csharp
public string ProvisioningRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `RegionalParameters`<sup>Optional</sup> <a name="RegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationRegionalParameters[] RegionalParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations {
    DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration LakeFormationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}. |

---

##### `LakeFormationConfiguration`<sup>Optional</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration"></a>

```csharp
public DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration LakeFormationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration {
    string[] LocationRegistrationExcludeS3Locations = null,
    string LocationRegistrationRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations">LocationRegistrationExcludeS3Locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole">LocationRegistrationRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}. |

---

##### `LocationRegistrationExcludeS3Locations`<sup>Optional</sup> <a name="LocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations"></a>

```csharp
public string[] LocationRegistrationExcludeS3Locations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}.

---

##### `LocationRegistrationRole`<sup>Optional</sup> <a name="LocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole"></a>

```csharp
public string LocationRegistrationRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}.

---

### DatazoneEnvironmentBlueprintConfigurationRegionalParameters <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationRegionalParameters {
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations">ResetLocationRegistrationExcludeS3Locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole">ResetLocationRegistrationRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocationRegistrationExcludeS3Locations` <a name="ResetLocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations"></a>

```csharp
private void ResetLocationRegistrationExcludeS3Locations()
```

##### `ResetLocationRegistrationRole` <a name="ResetLocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole"></a>

```csharp
private void ResetLocationRegistrationRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput">LocationRegistrationExcludeS3LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput">LocationRegistrationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations">LocationRegistrationExcludeS3Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole">LocationRegistrationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationRegistrationExcludeS3LocationsInput`<sup>Optional</sup> <a name="LocationRegistrationExcludeS3LocationsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput"></a>

```csharp
public string[] LocationRegistrationExcludeS3LocationsInput { get; }
```

- *Type:* string[]

---

##### `LocationRegistrationRoleInput`<sup>Optional</sup> <a name="LocationRegistrationRoleInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput"></a>

```csharp
public string LocationRegistrationRoleInput { get; }
```

- *Type:* string

---

##### `LocationRegistrationExcludeS3Locations`<sup>Required</sup> <a name="LocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations"></a>

```csharp
public string[] LocationRegistrationExcludeS3Locations { get; }
```

- *Type:* string[]

---

##### `LocationRegistrationRole`<sup>Required</sup> <a name="LocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole"></a>

```csharp
public string LocationRegistrationRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get"></a>

```csharp
private DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>[]

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration">PutLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration">ResetLakeFormationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormationConfiguration` <a name="PutLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration"></a>

```csharp
private void PutLakeFormationConfiguration(DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---

##### `ResetLakeFormationConfiguration` <a name="ResetLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration"></a>

```csharp
private void ResetLakeFormationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput">LakeFormationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration"></a>

```csharp
public DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference LakeFormationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a>

---

##### `LakeFormationConfigurationInput`<sup>Optional</sup> <a name="LakeFormationConfigurationInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration LakeFormationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersList <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationRegionalParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get"></a>

```csharp
private DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationRegionalParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>[]

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatazoneEnvironmentBlueprintConfigurationRegionalParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters">DatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>

---



