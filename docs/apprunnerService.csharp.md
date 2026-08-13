# `apprunnerService` Submodule <a name="`apprunnerService` Submodule" id="@cdktn/provider-awscc.apprunnerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerService <a name="ApprunnerService" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service awscc_apprunner_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerService(Construct Scope, string Id, ApprunnerServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig">ApprunnerServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig">ApprunnerServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration">PutHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration">PutInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration">PutObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration">PutSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn">ResetAutoScalingConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetHealthCheckConfiguration">ResetHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetInstanceConfiguration">ResetInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetObservabilityConfiguration">ResetObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(ApprunnerServiceEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `PutHealthCheckConfiguration` <a name="PutHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration"></a>

```csharp
private void PutHealthCheckConfiguration(ApprunnerServiceHealthCheckConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putHealthCheckConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `PutInstanceConfiguration` <a name="PutInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration"></a>

```csharp
private void PutInstanceConfiguration(ApprunnerServiceInstanceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putInstanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(ApprunnerServiceNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `PutObservabilityConfiguration` <a name="PutObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration"></a>

```csharp
private void PutObservabilityConfiguration(ApprunnerServiceObservabilityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putObservabilityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration"></a>

```csharp
private void PutSourceConfiguration(ApprunnerServiceSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags"></a>

```csharp
private void PutTags(IResolvable|ApprunnerServiceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]

---

##### `ResetAutoScalingConfigurationArn` <a name="ResetAutoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetAutoScalingConfigurationArn"></a>

```csharp
private void ResetAutoScalingConfigurationArn()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetHealthCheckConfiguration` <a name="ResetHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetHealthCheckConfiguration"></a>

```csharp
private void ResetHealthCheckConfiguration()
```

##### `ResetInstanceConfiguration` <a name="ResetInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetInstanceConfiguration"></a>

```csharp
private void ResetInstanceConfiguration()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetObservabilityConfiguration` <a name="ResetObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetObservabilityConfiguration"></a>

```csharp
private void ResetObservabilityConfiguration()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApprunnerService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApprunnerService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApprunnerService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfiguration">HealthCheckConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfiguration">ObservabilityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceUrl">ServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList">ApprunnerServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput">AutoScalingConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput">HealthCheckConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfigurationInput">InstanceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfigurationInput">ObservabilityConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfiguration"></a>

```csharp
public ApprunnerServiceEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference">ApprunnerServiceEncryptionConfigurationOutputReference</a>

---

##### `HealthCheckConfiguration`<sup>Required</sup> <a name="HealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfiguration"></a>

```csharp
public ApprunnerServiceHealthCheckConfigurationOutputReference HealthCheckConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference">ApprunnerServiceHealthCheckConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceConfiguration`<sup>Required</sup> <a name="InstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfiguration"></a>

```csharp
public ApprunnerServiceInstanceConfigurationOutputReference InstanceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference">ApprunnerServiceInstanceConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfiguration"></a>

```csharp
public ApprunnerServiceNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference">ApprunnerServiceNetworkConfigurationOutputReference</a>

---

##### `ObservabilityConfiguration`<sup>Required</sup> <a name="ObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfiguration"></a>

```csharp
public ApprunnerServiceObservabilityConfigurationOutputReference ObservabilityConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference">ApprunnerServiceObservabilityConfigurationOutputReference</a>

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceUrl"></a>

```csharp
public string ServiceUrl { get; }
```

- *Type:* string

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationOutputReference SourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference">ApprunnerServiceSourceConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tags"></a>

```csharp
public ApprunnerServiceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList">ApprunnerServiceTagsList</a>

---

##### `AutoScalingConfigurationArnInput`<sup>Optional</sup> <a name="AutoScalingConfigurationArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArnInput"></a>

```csharp
public string AutoScalingConfigurationArnInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---

##### `HealthCheckConfigurationInput`<sup>Optional</sup> <a name="HealthCheckConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.healthCheckConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceHealthCheckConfiguration HealthCheckConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---

##### `InstanceConfigurationInput`<sup>Optional</sup> <a name="InstanceConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.instanceConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceInstanceConfiguration InstanceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.networkConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---

##### `ObservabilityConfigurationInput`<sup>Optional</sup> <a name="ObservabilityConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.observabilityConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceObservabilityConfiguration ObservabilityConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.sourceConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfiguration SourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tagsInput"></a>

```csharp
public IResolvable|ApprunnerServiceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]

---

##### `AutoScalingConfigurationArn`<sup>Required</sup> <a name="AutoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.autoScalingConfigurationArn"></a>

```csharp
public string AutoScalingConfigurationArn { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerServiceConfig <a name="ApprunnerServiceConfig" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ApprunnerServiceSourceConfiguration SourceConfiguration,
    string AutoScalingConfigurationArn = null,
    ApprunnerServiceEncryptionConfiguration EncryptionConfiguration = null,
    ApprunnerServiceHealthCheckConfiguration HealthCheckConfiguration = null,
    ApprunnerServiceInstanceConfiguration InstanceConfiguration = null,
    ApprunnerServiceNetworkConfiguration NetworkConfiguration = null,
    ApprunnerServiceObservabilityConfiguration ObservabilityConfiguration = null,
    string ServiceName = null,
    IResolvable|ApprunnerServiceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | Source Code configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>string</code> | Autoscaling configuration ARN. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | Encryption configuration (KMS key). |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration">HealthCheckConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | Health check configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration">InstanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | Instance Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | Network configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration">ObservabilityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | Service observability configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | The AppRunner Service Name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#tags ApprunnerService#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.sourceConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfiguration SourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

Source Code configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_configuration ApprunnerService#source_configuration}

---

##### `AutoScalingConfigurationArn`<sup>Optional</sup> <a name="AutoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.autoScalingConfigurationArn"></a>

```csharp
public string AutoScalingConfigurationArn { get; set; }
```

- *Type:* string

Autoscaling configuration ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.encryptionConfiguration"></a>

```csharp
public ApprunnerServiceEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

Encryption configuration (KMS key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}

---

##### `HealthCheckConfiguration`<sup>Optional</sup> <a name="HealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.healthCheckConfiguration"></a>

```csharp
public ApprunnerServiceHealthCheckConfiguration HealthCheckConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

Health check configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}

---

##### `InstanceConfiguration`<sup>Optional</sup> <a name="InstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.instanceConfiguration"></a>

```csharp
public ApprunnerServiceInstanceConfiguration InstanceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

Instance Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#instance_configuration ApprunnerService#instance_configuration}

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.networkConfiguration"></a>

```csharp
public ApprunnerServiceNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

Network configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#network_configuration ApprunnerService#network_configuration}

---

##### `ObservabilityConfiguration`<sup>Optional</sup> <a name="ObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.observabilityConfiguration"></a>

```csharp
public ApprunnerServiceObservabilityConfiguration ObservabilityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

Service observability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_configuration ApprunnerService#observability_configuration}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The AppRunner Service Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#service_name ApprunnerService#service_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceConfig.property.tags"></a>

```csharp
public IResolvable|ApprunnerServiceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#tags ApprunnerService#tags}.

---

### ApprunnerServiceEncryptionConfiguration <a name="ApprunnerServiceEncryptionConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceEncryptionConfiguration {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>string</code> | The KMS Key. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The KMS Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#kms_key ApprunnerService#kms_key}

---

### ApprunnerServiceHealthCheckConfiguration <a name="ApprunnerServiceHealthCheckConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceHealthCheckConfiguration {
    double HealthyThreshold = null,
    double Interval = null,
    string Path = null,
    string Protocol = null,
    double Timeout = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | Health check Healthy Threshold. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval">Interval</a></code> | <code>double</code> | Health check Interval. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path">Path</a></code> | <code>string</code> | Health check Path. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol">Protocol</a></code> | <code>string</code> | Health Check Protocol. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout">Timeout</a></code> | <code>double</code> | Health check Timeout. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | Health check Unhealthy Threshold. |

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

Health check Healthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Health check Interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#interval ApprunnerService#interval}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Health check Path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#path ApprunnerService#path}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Health Check Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#protocol ApprunnerService#protocol}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Health check Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#timeout ApprunnerService#timeout}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

Health check Unhealthy Threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}

---

### ApprunnerServiceInstanceConfiguration <a name="ApprunnerServiceInstanceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceInstanceConfiguration {
    string Cpu = null,
    string InstanceRoleArn = null,
    string Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu">Cpu</a></code> | <code>string</code> | CPU. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>string</code> | Instance Role Arn. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory">Memory</a></code> | <code>string</code> | Memory. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#cpu ApprunnerService#cpu}

---

##### `InstanceRoleArn`<sup>Optional</sup> <a name="InstanceRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.instanceRoleArn"></a>

```csharp
public string InstanceRoleArn { get; set; }
```

- *Type:* string

Instance Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#memory ApprunnerService#memory}

---

### ApprunnerServiceNetworkConfiguration <a name="ApprunnerServiceNetworkConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceNetworkConfiguration {
    ApprunnerServiceNetworkConfigurationEgressConfiguration EgressConfiguration = null,
    ApprunnerServiceNetworkConfigurationIngressConfiguration IngressConfiguration = null,
    string IpAddressType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration">EgressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | Network egress configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration">IngressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | Network ingress configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | App Runner service endpoint IP address type. |

---

##### `EgressConfiguration`<sup>Optional</sup> <a name="EgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.egressConfiguration"></a>

```csharp
public ApprunnerServiceNetworkConfigurationEgressConfiguration EgressConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

Network egress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#egress_configuration ApprunnerService#egress_configuration}

---

##### `IngressConfiguration`<sup>Optional</sup> <a name="IngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ingressConfiguration"></a>

```csharp
public ApprunnerServiceNetworkConfigurationIngressConfiguration IngressConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

Network ingress configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

App Runner service endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#ip_address_type ApprunnerService#ip_address_type}

---

### ApprunnerServiceNetworkConfigurationEgressConfiguration <a name="ApprunnerServiceNetworkConfigurationEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceNetworkConfigurationEgressConfiguration {
    string EgressType = null,
    string VpcConnectorArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType">EgressType</a></code> | <code>string</code> | Network egress type. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn">VpcConnectorArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the App Runner VpcConnector. |

---

##### `EgressType`<sup>Optional</sup> <a name="EgressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.egressType"></a>

```csharp
public string EgressType { get; set; }
```

- *Type:* string

Network egress type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#egress_type ApprunnerService#egress_type}

---

##### `VpcConnectorArn`<sup>Optional</sup> <a name="VpcConnectorArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration.property.vpcConnectorArn"></a>

```csharp
public string VpcConnectorArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the App Runner VpcConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}

---

### ApprunnerServiceNetworkConfigurationIngressConfiguration <a name="ApprunnerServiceNetworkConfigurationIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceNetworkConfigurationIngressConfiguration {
    bool|IResolvable IsPubliclyAccessible = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible">IsPubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise. |

---

##### `IsPubliclyAccessible`<sup>Optional</sup> <a name="IsPubliclyAccessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration.property.isPubliclyAccessible"></a>

```csharp
public bool|IResolvable IsPubliclyAccessible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}

---

### ApprunnerServiceObservabilityConfiguration <a name="ApprunnerServiceObservabilityConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceObservabilityConfiguration {
    string ObservabilityConfigurationArn = null,
    bool|IResolvable ObservabilityEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn">ObservabilityConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled">ObservabilityEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Observability enabled. |

---

##### `ObservabilityConfigurationArn`<sup>Optional</sup> <a name="ObservabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```csharp
public string ObservabilityConfigurationArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}

---

##### `ObservabilityEnabled`<sup>Optional</sup> <a name="ObservabilityEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration.property.observabilityEnabled"></a>

```csharp
public bool|IResolvable ObservabilityEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Observability enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#observability_enabled ApprunnerService#observability_enabled}

---

### ApprunnerServiceSourceConfiguration <a name="ApprunnerServiceSourceConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfiguration {
    ApprunnerServiceSourceConfigurationAuthenticationConfiguration AuthenticationConfiguration = null,
    bool|IResolvable AutoDeploymentsEnabled = null,
    ApprunnerServiceSourceConfigurationCodeRepository CodeRepository = null,
    ApprunnerServiceSourceConfigurationImageRepository ImageRepository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | Authentication Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled">AutoDeploymentsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Auto Deployment enabled. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | Source Code Repository. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository">ImageRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | Image Repository. |

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.authenticationConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationAuthenticationConfiguration AuthenticationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

Authentication Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}

---

##### `AutoDeploymentsEnabled`<sup>Optional</sup> <a name="AutoDeploymentsEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.autoDeploymentsEnabled"></a>

```csharp
public bool|IResolvable AutoDeploymentsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Auto Deployment enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}

---

##### `CodeRepository`<sup>Optional</sup> <a name="CodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.codeRepository"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepository CodeRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

Source Code Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#code_repository ApprunnerService#code_repository}

---

##### `ImageRepository`<sup>Optional</sup> <a name="ImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration.property.imageRepository"></a>

```csharp
public ApprunnerServiceSourceConfigurationImageRepository ImageRepository { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

Image Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_repository ApprunnerService#image_repository}

---

### ApprunnerServiceSourceConfigurationAuthenticationConfiguration <a name="ApprunnerServiceSourceConfigurationAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
    string AccessRoleArn = null,
    string ConnectionArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn">AccessRoleArn</a></code> | <code>string</code> | Access Role Arn. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | Connection Arn. |

---

##### `AccessRoleArn`<sup>Optional</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.accessRoleArn"></a>

```csharp
public string AccessRoleArn { get; set; }
```

- *Type:* string

Access Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#access_role_arn ApprunnerService#access_role_arn}

---

##### `ConnectionArn`<sup>Optional</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; set; }
```

- *Type:* string

Connection Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#connection_arn ApprunnerService#connection_arn}

---

### ApprunnerServiceSourceConfigurationCodeRepository <a name="ApprunnerServiceSourceConfigurationCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepository {
    ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration CodeConfiguration = null,
    string RepositoryUrl = null,
    ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion SourceCodeVersion = null,
    string SourceDirectory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | Code Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | Repository Url. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion">SourceCodeVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | Source Code Version. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceDirectory">SourceDirectory</a></code> | <code>string</code> | Source Directory. |

---

##### `CodeConfiguration`<sup>Optional</sup> <a name="CodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.codeConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration CodeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

Code Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#code_configuration ApprunnerService#code_configuration}

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; set; }
```

- *Type:* string

Repository Url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#repository_url ApprunnerService#repository_url}

---

##### `SourceCodeVersion`<sup>Optional</sup> <a name="SourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceCodeVersion"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion SourceCodeVersion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

Source Code Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_code_version ApprunnerService#source_code_version}

---

##### `SourceDirectory`<sup>Optional</sup> <a name="SourceDirectory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository.property.sourceDirectory"></a>

```csharp
public string SourceDirectory { get; set; }
```

- *Type:* string

Source Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#source_directory ApprunnerService#source_directory}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues CodeConfigurationValues = null,
    string ConfigurationSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues">CodeConfigurationValues</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | Code Configuration Values. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource">ConfigurationSource</a></code> | <code>string</code> | Configuration Source. |

---

##### `CodeConfigurationValues`<sup>Optional</sup> <a name="CodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.codeConfigurationValues"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues CodeConfigurationValues { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

Code Configuration Values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}

---

##### `ConfigurationSource`<sup>Optional</sup> <a name="ConfigurationSource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration.property.configurationSource"></a>

```csharp
public string ConfigurationSource { get; set; }
```

- *Type:* string

Configuration Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#configuration_source ApprunnerService#configuration_source}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    string BuildCommand = null,
    string Port = null,
    string Runtime = null,
    IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets[] RuntimeEnvironmentSecrets = null,
    IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables[] RuntimeEnvironmentVariables = null,
    string StartCommand = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand">BuildCommand</a></code> | <code>string</code> | Build Command. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port">Port</a></code> | <code>string</code> | Port. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime">Runtime</a></code> | <code>string</code> | Runtime. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]</code> | The secrets and parameters that get referenced by your service as environment variables. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand">StartCommand</a></code> | <code>string</code> | Start Command. |

---

##### `BuildCommand`<sup>Optional</sup> <a name="BuildCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.buildCommand"></a>

```csharp
public string BuildCommand { get; set; }
```

- *Type:* string

Build Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#build_command ApprunnerService#build_command}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime ApprunnerService#runtime}

---

##### `RuntimeEnvironmentSecrets`<sup>Optional</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentSecrets"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets[] RuntimeEnvironmentSecrets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

##### `RuntimeEnvironmentVariables`<sup>Optional</sup> <a name="RuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.runtimeEnvironmentVariables"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables[] RuntimeEnvironmentVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `StartCommand`<sup>Optional</sup> <a name="StartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues.property.startCommand"></a>

```csharp
public string StartCommand { get; set; }
```

- *Type:* string

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type">Type</a></code> | <code>string</code> | Source Code Version Type. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value">Value</a></code> | <code>string</code> | Source Code Version Value. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Source Code Version Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#type ApprunnerService#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Source Code Version Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}

---

### ApprunnerServiceSourceConfigurationImageRepository <a name="ApprunnerServiceSourceConfigurationImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepository {
    ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration ImageConfiguration = null,
    string ImageIdentifier = null,
    string ImageRepositoryType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | Image Configuration. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier">ImageIdentifier</a></code> | <code>string</code> | Image Identifier. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType">ImageRepositoryType</a></code> | <code>string</code> | Image Repository Type. |

---

##### `ImageConfiguration`<sup>Optional</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration ImageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

Image Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_configuration ApprunnerService#image_configuration}

---

##### `ImageIdentifier`<sup>Optional</sup> <a name="ImageIdentifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageIdentifier"></a>

```csharp
public string ImageIdentifier { get; set; }
```

- *Type:* string

Image Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_identifier ApprunnerService#image_identifier}

---

##### `ImageRepositoryType`<sup>Optional</sup> <a name="ImageRepositoryType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository.property.imageRepositoryType"></a>

```csharp
public string ImageRepositoryType { get; set; }
```

- *Type:* string

Image Repository Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#image_repository_type ApprunnerService#image_repository_type}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
    string Port = null,
    IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets[] RuntimeEnvironmentSecrets = null,
    IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables[] RuntimeEnvironmentVariables = null,
    string StartCommand = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port">Port</a></code> | <code>string</code> | Port. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]</code> | The secrets and parameters that get referenced by your service as environment variables. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand">StartCommand</a></code> | <code>string</code> | Start Command. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#port ApprunnerService#port}

---

##### `RuntimeEnvironmentSecrets`<sup>Optional</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentSecrets"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets[] RuntimeEnvironmentSecrets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]

The secrets and parameters that get referenced by your service as environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}

---

##### `RuntimeEnvironmentVariables`<sup>Optional</sup> <a name="RuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.runtimeEnvironmentVariables"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables[] RuntimeEnvironmentVariables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}.

---

##### `StartCommand`<sup>Optional</sup> <a name="StartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration.property.startCommand"></a>

```csharp
public string StartCommand { get; set; }
```

- *Type:* string

Start Command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#start_command ApprunnerService#start_command}

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#name ApprunnerService#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

### ApprunnerServiceTags <a name="ApprunnerServiceTags" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#key ApprunnerService#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#key ApprunnerService#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_service#value ApprunnerService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerServiceEncryptionConfigurationOutputReference <a name="ApprunnerServiceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceEncryptionConfiguration">ApprunnerServiceEncryptionConfiguration</a>

---


### ApprunnerServiceHealthCheckConfigurationOutputReference <a name="ApprunnerServiceHealthCheckConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceHealthCheckConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceHealthCheckConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceHealthCheckConfiguration">ApprunnerServiceHealthCheckConfiguration</a>

---


### ApprunnerServiceInstanceConfigurationOutputReference <a name="ApprunnerServiceInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceInstanceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn">ResetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetInstanceRoleArn` <a name="ResetInstanceRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetInstanceRoleArn"></a>

```csharp
private void ResetInstanceRoleArn()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput">InstanceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `InstanceRoleArnInput`<sup>Optional</sup> <a name="InstanceRoleArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArnInput"></a>

```csharp
public string InstanceRoleArnInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `InstanceRoleArn`<sup>Required</sup> <a name="InstanceRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.instanceRoleArn"></a>

```csharp
public string InstanceRoleArn { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceInstanceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceInstanceConfiguration">ApprunnerServiceInstanceConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType">ResetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn">ResetVpcConnectorArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressType` <a name="ResetEgressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetEgressType"></a>

```csharp
private void ResetEgressType()
```

##### `ResetVpcConnectorArn` <a name="ResetVpcConnectorArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.resetVpcConnectorArn"></a>

```csharp
private void ResetVpcConnectorArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput">EgressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput">VpcConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType">EgressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn">VpcConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressTypeInput`<sup>Optional</sup> <a name="EgressTypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressTypeInput"></a>

```csharp
public string EgressTypeInput { get; }
```

- *Type:* string

---

##### `VpcConnectorArnInput`<sup>Optional</sup> <a name="VpcConnectorArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArnInput"></a>

```csharp
public string VpcConnectorArnInput { get; }
```

- *Type:* string

---

##### `EgressType`<sup>Required</sup> <a name="EgressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.egressType"></a>

```csharp
public string EgressType { get; }
```

- *Type:* string

---

##### `VpcConnectorArn`<sup>Required</sup> <a name="VpcConnectorArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.vpcConnectorArn"></a>

```csharp
public string VpcConnectorArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceNetworkConfigurationEgressConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible">ResetIsPubliclyAccessible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsPubliclyAccessible` <a name="ResetIsPubliclyAccessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.resetIsPubliclyAccessible"></a>

```csharp
private void ResetIsPubliclyAccessible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput">IsPubliclyAccessibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible">IsPubliclyAccessible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsPubliclyAccessibleInput`<sup>Optional</sup> <a name="IsPubliclyAccessibleInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessibleInput"></a>

```csharp
public bool|IResolvable IsPubliclyAccessibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsPubliclyAccessible`<sup>Required</sup> <a name="IsPubliclyAccessible" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.isPubliclyAccessible"></a>

```csharp
public bool|IResolvable IsPubliclyAccessible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceNetworkConfigurationIngressConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---


### ApprunnerServiceNetworkConfigurationOutputReference <a name="ApprunnerServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration">PutEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration">PutIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration">ResetEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration">ResetIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressConfiguration` <a name="PutEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration"></a>

```csharp
private void PutEgressConfiguration(ApprunnerServiceNetworkConfigurationEgressConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putEgressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `PutIngressConfiguration` <a name="PutIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration"></a>

```csharp
private void PutIngressConfiguration(ApprunnerServiceNetworkConfigurationIngressConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.putIngressConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `ResetEgressConfiguration` <a name="ResetEgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetEgressConfiguration"></a>

```csharp
private void ResetEgressConfiguration()
```

##### `ResetIngressConfiguration` <a name="ResetIngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIngressConfiguration"></a>

```csharp
private void ResetIngressConfiguration()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration">EgressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration">IngressConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput">EgressConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput">IngressConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressConfiguration`<sup>Required</sup> <a name="EgressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfiguration"></a>

```csharp
public ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference EgressConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference</a>

---

##### `IngressConfiguration`<sup>Required</sup> <a name="IngressConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfiguration"></a>

```csharp
public ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference IngressConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference">ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference</a>

---

##### `EgressConfigurationInput`<sup>Optional</sup> <a name="EgressConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.egressConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceNetworkConfigurationEgressConfiguration EgressConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationEgressConfiguration">ApprunnerServiceNetworkConfigurationEgressConfiguration</a>

---

##### `IngressConfigurationInput`<sup>Optional</sup> <a name="IngressConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ingressConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceNetworkConfigurationIngressConfiguration IngressConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationIngressConfiguration">ApprunnerServiceNetworkConfigurationIngressConfiguration</a>

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceNetworkConfiguration">ApprunnerServiceNetworkConfiguration</a>

---


### ApprunnerServiceObservabilityConfigurationOutputReference <a name="ApprunnerServiceObservabilityConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceObservabilityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn">ResetObservabilityConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityEnabled">ResetObservabilityEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObservabilityConfigurationArn` <a name="ResetObservabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityConfigurationArn"></a>

```csharp
private void ResetObservabilityConfigurationArn()
```

##### `ResetObservabilityEnabled` <a name="ResetObservabilityEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.resetObservabilityEnabled"></a>

```csharp
private void ResetObservabilityEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput">ObservabilityConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput">ObservabilityEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn">ObservabilityConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled">ObservabilityEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObservabilityConfigurationArnInput`<sup>Optional</sup> <a name="ObservabilityConfigurationArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArnInput"></a>

```csharp
public string ObservabilityConfigurationArnInput { get; }
```

- *Type:* string

---

##### `ObservabilityEnabledInput`<sup>Optional</sup> <a name="ObservabilityEnabledInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabledInput"></a>

```csharp
public bool|IResolvable ObservabilityEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ObservabilityConfigurationArn`<sup>Required</sup> <a name="ObservabilityConfigurationArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityConfigurationArn"></a>

```csharp
public string ObservabilityConfigurationArn { get; }
```

- *Type:* string

---

##### `ObservabilityEnabled`<sup>Required</sup> <a name="ObservabilityEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.observabilityEnabled"></a>

```csharp
public bool|IResolvable ObservabilityEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceObservabilityConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceObservabilityConfiguration">ApprunnerServiceObservabilityConfiguration</a>

---


### ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn">ResetAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn">ResetConnectionArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessRoleArn` <a name="ResetAccessRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetAccessRoleArn"></a>

```csharp
private void ResetAccessRoleArn()
```

##### `ResetConnectionArn` <a name="ResetConnectionArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.resetConnectionArn"></a>

```csharp
private void ResetConnectionArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput">AccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput">ConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn">AccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessRoleArnInput`<sup>Optional</sup> <a name="AccessRoleArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArnInput"></a>

```csharp
public string AccessRoleArnInput { get; }
```

- *Type:* string

---

##### `ConnectionArnInput`<sup>Optional</sup> <a name="ConnectionArnInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArnInput"></a>

```csharp
public string ConnectionArnInput { get; }
```

- *Type:* string

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.accessRoleArn"></a>

```csharp
public string AccessRoleArn { get; }
```

- *Type:* string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationAuthenticationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets">PutRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables">PutRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand">ResetBuildCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets">ResetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables">ResetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand">ResetStartCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuntimeEnvironmentSecrets` <a name="PutRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets"></a>

```csharp
private void PutRuntimeEnvironmentSecrets(IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentSecrets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]

---

##### `PutRuntimeEnvironmentVariables` <a name="PutRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables"></a>

```csharp
private void PutRuntimeEnvironmentVariables(IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.putRuntimeEnvironmentVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]

---

##### `ResetBuildCommand` <a name="ResetBuildCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetBuildCommand"></a>

```csharp
private void ResetBuildCommand()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```

##### `ResetRuntimeEnvironmentSecrets` <a name="ResetRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentSecrets"></a>

```csharp
private void ResetRuntimeEnvironmentSecrets()
```

##### `ResetRuntimeEnvironmentVariables` <a name="ResetRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetRuntimeEnvironmentVariables"></a>

```csharp
private void ResetRuntimeEnvironmentVariables()
```

##### `ResetStartCommand` <a name="ResetStartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.resetStartCommand"></a>

```csharp
private void ResetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput">BuildCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput">RuntimeEnvironmentSecretsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput">RuntimeEnvironmentVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput">StartCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand">BuildCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand">StartCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeEnvironmentSecrets`<sup>Required</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecrets"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList RuntimeEnvironmentSecrets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList</a>

---

##### `RuntimeEnvironmentVariables`<sup>Required</sup> <a name="RuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariables"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList RuntimeEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList</a>

---

##### `BuildCommandInput`<sup>Optional</sup> <a name="BuildCommandInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommandInput"></a>

```csharp
public string BuildCommandInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `RuntimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="RuntimeEnvironmentSecretsInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets[] RuntimeEnvironmentSecretsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]

---

##### `RuntimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="RuntimeEnvironmentVariablesInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables[] RuntimeEnvironmentVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `StartCommandInput`<sup>Optional</sup> <a name="StartCommandInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommandInput"></a>

```csharp
public string StartCommandInput { get; }
```

- *Type:* string

---

##### `BuildCommand`<sup>Required</sup> <a name="BuildCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.buildCommand"></a>

```csharp
public string BuildCommand { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `StartCommand`<sup>Required</sup> <a name="StartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.startCommand"></a>

```csharp
public string StartCommand { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get"></a>

```csharp
private ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsList.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>[]

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecretsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentSecrets</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get"></a>

```csharp
private ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesList.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>[]

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariables</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues">PutCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues">ResetCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetConfigurationSource">ResetConfigurationSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfigurationValues` <a name="PutCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues"></a>

```csharp
private void PutCodeConfigurationValues(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.putCodeConfigurationValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `ResetCodeConfigurationValues` <a name="ResetCodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetCodeConfigurationValues"></a>

```csharp
private void ResetCodeConfigurationValues()
```

##### `ResetConfigurationSource` <a name="ResetConfigurationSource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.resetConfigurationSource"></a>

```csharp
private void ResetConfigurationSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues">CodeConfigurationValues</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput">CodeConfigurationValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput">ConfigurationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource">ConfigurationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfigurationValues`<sup>Required</sup> <a name="CodeConfigurationValues" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValues"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference CodeConfigurationValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference</a>

---

##### `CodeConfigurationValuesInput`<sup>Optional</sup> <a name="CodeConfigurationValuesInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.codeConfigurationValuesInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues CodeConfigurationValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues</a>

---

##### `ConfigurationSourceInput`<sup>Optional</sup> <a name="ConfigurationSourceInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSourceInput"></a>

```csharp
public string ConfigurationSourceInput { get; }
```

- *Type:* string

---

##### `ConfigurationSource`<sup>Required</sup> <a name="ConfigurationSource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.configurationSource"></a>

```csharp
public string ConfigurationSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration">PutCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion">PutSourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration">ResetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceCodeVersion">ResetSourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceDirectory">ResetSourceDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfiguration` <a name="PutCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration"></a>

```csharp
private void PutCodeConfiguration(ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `PutSourceCodeVersion` <a name="PutSourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion"></a>

```csharp
private void PutSourceCodeVersion(ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.putSourceCodeVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `ResetCodeConfiguration` <a name="ResetCodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetCodeConfiguration"></a>

```csharp
private void ResetCodeConfiguration()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetRepositoryUrl"></a>

```csharp
private void ResetRepositoryUrl()
```

##### `ResetSourceCodeVersion` <a name="ResetSourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceCodeVersion"></a>

```csharp
private void ResetSourceCodeVersion()
```

##### `ResetSourceDirectory` <a name="ResetSourceDirectory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.resetSourceDirectory"></a>

```csharp
private void ResetSourceDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion">SourceCodeVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput">CodeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput">SourceCodeVersionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectoryInput">SourceDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectory">SourceDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfiguration`<sup>Required</sup> <a name="CodeConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference CodeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference</a>

---

##### `SourceCodeVersion`<sup>Required</sup> <a name="SourceCodeVersion" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersion"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference SourceCodeVersion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference</a>

---

##### `CodeConfigurationInput`<sup>Optional</sup> <a name="CodeConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.codeConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration CodeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration">ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration</a>

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrlInput"></a>

```csharp
public string RepositoryUrlInput { get; }
```

- *Type:* string

---

##### `SourceCodeVersionInput`<sup>Optional</sup> <a name="SourceCodeVersionInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceCodeVersionInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion SourceCodeVersionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---

##### `SourceDirectoryInput`<sup>Optional</sup> <a name="SourceDirectoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectoryInput"></a>

```csharp
public string SourceDirectoryInput { get; }
```

- *Type:* string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.repositoryUrl"></a>

```csharp
public string RepositoryUrl { get; }
```

- *Type:* string

---

##### `SourceDirectory`<sup>Required</sup> <a name="SourceDirectory" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.sourceDirectory"></a>

```csharp
public string SourceDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---


### ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference <a name="ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion">ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets">PutRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables">PutRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets">ResetRuntimeEnvironmentSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables">ResetRuntimeEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand">ResetStartCommand</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuntimeEnvironmentSecrets` <a name="PutRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets"></a>

```csharp
private void PutRuntimeEnvironmentSecrets(IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentSecrets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]

---

##### `PutRuntimeEnvironmentVariables` <a name="PutRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables"></a>

```csharp
private void PutRuntimeEnvironmentVariables(IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.putRuntimeEnvironmentVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]

---

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRuntimeEnvironmentSecrets` <a name="ResetRuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentSecrets"></a>

```csharp
private void ResetRuntimeEnvironmentSecrets()
```

##### `ResetRuntimeEnvironmentVariables` <a name="ResetRuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetRuntimeEnvironmentVariables"></a>

```csharp
private void ResetRuntimeEnvironmentVariables()
```

##### `ResetStartCommand` <a name="ResetStartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.resetStartCommand"></a>

```csharp
private void ResetStartCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets">RuntimeEnvironmentSecrets</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables">RuntimeEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput">RuntimeEnvironmentSecretsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput">RuntimeEnvironmentVariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput">StartCommandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand">StartCommand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeEnvironmentSecrets`<sup>Required</sup> <a name="RuntimeEnvironmentSecrets" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecrets"></a>

```csharp
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList RuntimeEnvironmentSecrets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList</a>

---

##### `RuntimeEnvironmentVariables`<sup>Required</sup> <a name="RuntimeEnvironmentVariables" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariables"></a>

```csharp
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList RuntimeEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `RuntimeEnvironmentSecretsInput`<sup>Optional</sup> <a name="RuntimeEnvironmentSecretsInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentSecretsInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets[] RuntimeEnvironmentSecretsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]

---

##### `RuntimeEnvironmentVariablesInput`<sup>Optional</sup> <a name="RuntimeEnvironmentVariablesInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.runtimeEnvironmentVariablesInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables[] RuntimeEnvironmentVariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]

---

##### `StartCommandInput`<sup>Optional</sup> <a name="StartCommandInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommandInput"></a>

```csharp
public string StartCommandInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `StartCommand`<sup>Required</sup> <a name="StartCommand" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.startCommand"></a>

```csharp
public string StartCommand { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get"></a>

```csharp
private ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsList.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>[]

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecretsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentSecrets</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get"></a>

```csharp
private ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesList.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>[]

---


### ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariables</a>

---


### ApprunnerServiceSourceConfigurationImageRepositoryOutputReference <a name="ApprunnerServiceSourceConfigurationImageRepositoryOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration">PutImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration">ResetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageIdentifier">ResetImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageRepositoryType">ResetImageRepositoryType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImageConfiguration` <a name="PutImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration"></a>

```csharp
private void PutImageConfiguration(ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `ResetImageConfiguration` <a name="ResetImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageConfiguration"></a>

```csharp
private void ResetImageConfiguration()
```

##### `ResetImageIdentifier` <a name="ResetImageIdentifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageIdentifier"></a>

```csharp
private void ResetImageIdentifier()
```

##### `ResetImageRepositoryType` <a name="ResetImageRepositoryType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.resetImageRepositoryType"></a>

```csharp
private void ResetImageRepositoryType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput">ImageConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput">ImageIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput">ImageRepositoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier">ImageIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType">ImageRepositoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference ImageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference</a>

---

##### `ImageConfigurationInput`<sup>Optional</sup> <a name="ImageConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration ImageConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration">ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration</a>

---

##### `ImageIdentifierInput`<sup>Optional</sup> <a name="ImageIdentifierInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifierInput"></a>

```csharp
public string ImageIdentifierInput { get; }
```

- *Type:* string

---

##### `ImageRepositoryTypeInput`<sup>Optional</sup> <a name="ImageRepositoryTypeInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryTypeInput"></a>

```csharp
public string ImageRepositoryTypeInput { get; }
```

- *Type:* string

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageIdentifier"></a>

```csharp
public string ImageIdentifier { get; }
```

- *Type:* string

---

##### `ImageRepositoryType`<sup>Required</sup> <a name="ImageRepositoryType" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.imageRepositoryType"></a>

```csharp
public string ImageRepositoryType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepository InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---


### ApprunnerServiceSourceConfigurationOutputReference <a name="ApprunnerServiceSourceConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository">PutCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository">PutImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled">ResetAutoDeploymentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository">ResetCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository">ResetImageRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration"></a>

```csharp
private void PutAuthenticationConfiguration(ApprunnerServiceSourceConfigurationAuthenticationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `PutCodeRepository` <a name="PutCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository"></a>

```csharp
private void PutCodeRepository(ApprunnerServiceSourceConfigurationCodeRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putCodeRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `PutImageRepository` <a name="PutImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository"></a>

```csharp
private void PutImageRepository(ApprunnerServiceSourceConfigurationImageRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.putImageRepository.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```csharp
private void ResetAuthenticationConfiguration()
```

##### `ResetAutoDeploymentsEnabled` <a name="ResetAutoDeploymentsEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetAutoDeploymentsEnabled"></a>

```csharp
private void ResetAutoDeploymentsEnabled()
```

##### `ResetCodeRepository` <a name="ResetCodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetCodeRepository"></a>

```csharp
private void ResetCodeRepository()
```

##### `ResetImageRepository` <a name="ResetImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.resetImageRepository"></a>

```csharp
private void ResetImageRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository">CodeRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository">ImageRepository</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput">AutoDeploymentsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput">CodeRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput">ImageRepositoryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled">AutoDeploymentsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfiguration"></a>

```csharp
public ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference">ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `CodeRepository`<sup>Required</sup> <a name="CodeRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepository"></a>

```csharp
public ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference CodeRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference">ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference</a>

---

##### `ImageRepository`<sup>Required</sup> <a name="ImageRepository" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepository"></a>

```csharp
public ApprunnerServiceSourceConfigurationImageRepositoryOutputReference ImageRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepositoryOutputReference">ApprunnerServiceSourceConfigurationImageRepositoryOutputReference</a>

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationAuthenticationConfiguration AuthenticationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationAuthenticationConfiguration">ApprunnerServiceSourceConfigurationAuthenticationConfiguration</a>

---

##### `AutoDeploymentsEnabledInput`<sup>Optional</sup> <a name="AutoDeploymentsEnabledInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabledInput"></a>

```csharp
public bool|IResolvable AutoDeploymentsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CodeRepositoryInput`<sup>Optional</sup> <a name="CodeRepositoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.codeRepositoryInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationCodeRepository CodeRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationCodeRepository">ApprunnerServiceSourceConfigurationCodeRepository</a>

---

##### `ImageRepositoryInput`<sup>Optional</sup> <a name="ImageRepositoryInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.imageRepositoryInput"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfigurationImageRepository ImageRepositoryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationImageRepository">ApprunnerServiceSourceConfigurationImageRepository</a>

---

##### `AutoDeploymentsEnabled`<sup>Required</sup> <a name="AutoDeploymentsEnabled" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.autoDeploymentsEnabled"></a>

```csharp
public bool|IResolvable AutoDeploymentsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceSourceConfiguration">ApprunnerServiceSourceConfiguration</a>

---


### ApprunnerServiceTagsList <a name="ApprunnerServiceTagsList" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get"></a>

```csharp
private ApprunnerServiceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>[]

---


### ApprunnerServiceTagsOutputReference <a name="ApprunnerServiceTagsOutputReference" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerServiceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerServiceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerService.ApprunnerServiceTags">ApprunnerServiceTags</a>

---



