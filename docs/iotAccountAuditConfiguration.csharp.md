# `iotAccountAuditConfiguration` Submodule <a name="`iotAccountAuditConfiguration` Submodule" id="@cdktn/provider-awscc.iotAccountAuditConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotAccountAuditConfiguration <a name="IotAccountAuditConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration awscc_iot_account_audit_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfiguration(Construct Scope, string Id, IotAccountAuditConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig">IotAccountAuditConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig">IotAccountAuditConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations">PutAuditCheckConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditNotificationTargetConfigurations">PutAuditNotificationTargetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetAuditNotificationTargetConfigurations">ResetAuditNotificationTargetConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuditCheckConfigurations` <a name="PutAuditCheckConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations"></a>

```csharp
private void PutAuditCheckConfigurations(IotAccountAuditConfigurationAuditCheckConfigurations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditCheckConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

---

##### `PutAuditNotificationTargetConfigurations` <a name="PutAuditNotificationTargetConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditNotificationTargetConfigurations"></a>

```csharp
private void PutAuditNotificationTargetConfigurations(IotAccountAuditConfigurationAuditNotificationTargetConfigurations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.putAuditNotificationTargetConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

---

##### `ResetAuditNotificationTargetConfigurations` <a name="ResetAuditNotificationTargetConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.resetAuditNotificationTargetConfigurations"></a>

```csharp
private void ResetAuditNotificationTargetConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotAccountAuditConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotAccountAuditConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotAccountAuditConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotAccountAuditConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotAccountAuditConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotAccountAuditConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotAccountAuditConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotAccountAuditConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotAccountAuditConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurations">AuditCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurations">AuditNotificationTargetConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurationsInput">AuditCheckConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurationsInput">AuditNotificationTargetConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuditCheckConfigurations`<sup>Required</sup> <a name="AuditCheckConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurations"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference AuditCheckConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference</a>

---

##### `AuditNotificationTargetConfigurations`<sup>Required</sup> <a name="AuditNotificationTargetConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurations"></a>

```csharp
public IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference AuditNotificationTargetConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AuditCheckConfigurationsInput`<sup>Optional</sup> <a name="AuditCheckConfigurationsInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditCheckConfigurationsInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurations AuditCheckConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

---

##### `AuditNotificationTargetConfigurationsInput`<sup>Optional</sup> <a name="AuditNotificationTargetConfigurationsInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.auditNotificationTargetConfigurationsInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditNotificationTargetConfigurations AuditNotificationTargetConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotAccountAuditConfigurationAuditCheckConfigurations <a name="IotAccountAuditConfigurationAuditCheckConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurations {
    IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck AuthenticatedCognitoRoleOverlyPermissiveCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck CaCertificateExpiringCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck CaCertificateKeyQualityCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck ConflictingClientIdsCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck DeviceCertificateAgeCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck DeviceCertificateExpiringCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck DeviceCertificateKeyQualityCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck DeviceCertificateSharedCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck IntermediateCaRevokedForActiveDeviceCertificatesCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck IotPolicyOverlyPermissiveCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck IoTPolicyPotentialMisConfigurationCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck IotRoleAliasAllowsAccessToUnusedServicesCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck IotRoleAliasOverlyPermissiveCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck LoggingDisabledCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck RevokedCaCertificateStillActiveCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck RevokedDeviceCertificateStillActiveCheck = null,
    IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck UnauthenticatedCognitoRoleOverlyPermissiveCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.authenticatedCognitoRoleOverlyPermissiveCheck">AuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateExpiringCheck">CaCertificateExpiringCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateKeyQualityCheck">CaCertificateKeyQualityCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.conflictingClientIdsCheck">ConflictingClientIdsCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateAgeCheck">DeviceCertificateAgeCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a></code> | A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateExpiringCheck">DeviceCertificateExpiringCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a></code> | A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateKeyQualityCheck">DeviceCertificateKeyQualityCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateSharedCheck">DeviceCertificateSharedCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.intermediateCaRevokedForActiveDeviceCertificatesCheck">IntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotPolicyOverlyPermissiveCheck">IotPolicyOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.ioTPolicyPotentialMisConfigurationCheck">IoTPolicyPotentialMisConfigurationCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasAllowsAccessToUnusedServicesCheck">IotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasOverlyPermissiveCheck">IotRoleAliasOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.loggingDisabledCheck">LoggingDisabledCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedCaCertificateStillActiveCheck">RevokedCaCertificateStillActiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedDeviceCertificateStillActiveCheck">RevokedDeviceCertificateStillActiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a></code> | The configuration for a specific audit check. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.unauthenticatedCognitoRoleOverlyPermissiveCheck">UnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | The configuration for a specific audit check. |

---

##### `AuthenticatedCognitoRoleOverlyPermissiveCheck`<sup>Optional</sup> <a name="AuthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.authenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck AuthenticatedCognitoRoleOverlyPermissiveCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#authenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#authenticated_cognito_role_overly_permissive_check}

---

##### `CaCertificateExpiringCheck`<sup>Optional</sup> <a name="CaCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateExpiringCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck CaCertificateExpiringCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#ca_certificate_expiring_check IotAccountAuditConfiguration#ca_certificate_expiring_check}

---

##### `CaCertificateKeyQualityCheck`<sup>Optional</sup> <a name="CaCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.caCertificateKeyQualityCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck CaCertificateKeyQualityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#ca_certificate_key_quality_check IotAccountAuditConfiguration#ca_certificate_key_quality_check}

---

##### `ConflictingClientIdsCheck`<sup>Optional</sup> <a name="ConflictingClientIdsCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.conflictingClientIdsCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck ConflictingClientIdsCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#conflicting_client_ids_check IotAccountAuditConfiguration#conflicting_client_ids_check}

---

##### `DeviceCertificateAgeCheck`<sup>Optional</sup> <a name="DeviceCertificateAgeCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateAgeCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck DeviceCertificateAgeCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

A structure containing the configName and corresponding configValue for configuring DeviceCertAgeCheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_age_check IotAccountAuditConfiguration#device_certificate_age_check}

---

##### `DeviceCertificateExpiringCheck`<sup>Optional</sup> <a name="DeviceCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateExpiringCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck DeviceCertificateExpiringCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

A structure containing the configName and corresponding configValue for configuring DeviceCertExpirationCheck.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_expiring_check IotAccountAuditConfiguration#device_certificate_expiring_check}

---

##### `DeviceCertificateKeyQualityCheck`<sup>Optional</sup> <a name="DeviceCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateKeyQualityCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck DeviceCertificateKeyQualityCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_key_quality_check IotAccountAuditConfiguration#device_certificate_key_quality_check}

---

##### `DeviceCertificateSharedCheck`<sup>Optional</sup> <a name="DeviceCertificateSharedCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.deviceCertificateSharedCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck DeviceCertificateSharedCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#device_certificate_shared_check IotAccountAuditConfiguration#device_certificate_shared_check}

---

##### `IntermediateCaRevokedForActiveDeviceCertificatesCheck`<sup>Optional</sup> <a name="IntermediateCaRevokedForActiveDeviceCertificatesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.intermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck IntermediateCaRevokedForActiveDeviceCertificatesCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#intermediate_ca_revoked_for_active_device_certificates_check IotAccountAuditConfiguration#intermediate_ca_revoked_for_active_device_certificates_check}

---

##### `IotPolicyOverlyPermissiveCheck`<sup>Optional</sup> <a name="IotPolicyOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotPolicyOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck IotPolicyOverlyPermissiveCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#iot_policy_overly_permissive_check IotAccountAuditConfiguration#iot_policy_overly_permissive_check}

---

##### `IoTPolicyPotentialMisConfigurationCheck`<sup>Optional</sup> <a name="IoTPolicyPotentialMisConfigurationCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.ioTPolicyPotentialMisConfigurationCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck IoTPolicyPotentialMisConfigurationCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#io_t_policy_potential_mis_configuration_check IotAccountAuditConfiguration#io_t_policy_potential_mis_configuration_check}

---

##### `IotRoleAliasAllowsAccessToUnusedServicesCheck`<sup>Optional</sup> <a name="IotRoleAliasAllowsAccessToUnusedServicesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck IotRoleAliasAllowsAccessToUnusedServicesCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#iot_role_alias_allows_access_to_unused_services_check IotAccountAuditConfiguration#iot_role_alias_allows_access_to_unused_services_check}

---

##### `IotRoleAliasOverlyPermissiveCheck`<sup>Optional</sup> <a name="IotRoleAliasOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.iotRoleAliasOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck IotRoleAliasOverlyPermissiveCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#iot_role_alias_overly_permissive_check IotAccountAuditConfiguration#iot_role_alias_overly_permissive_check}

---

##### `LoggingDisabledCheck`<sup>Optional</sup> <a name="LoggingDisabledCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.loggingDisabledCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck LoggingDisabledCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#logging_disabled_check IotAccountAuditConfiguration#logging_disabled_check}

---

##### `RevokedCaCertificateStillActiveCheck`<sup>Optional</sup> <a name="RevokedCaCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedCaCertificateStillActiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck RevokedCaCertificateStillActiveCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#revoked_ca_certificate_still_active_check IotAccountAuditConfiguration#revoked_ca_certificate_still_active_check}

---

##### `RevokedDeviceCertificateStillActiveCheck`<sup>Optional</sup> <a name="RevokedDeviceCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.revokedDeviceCertificateStillActiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck RevokedDeviceCertificateStillActiveCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#revoked_device_certificate_still_active_check IotAccountAuditConfiguration#revoked_device_certificate_still_active_check}

---

##### `UnauthenticatedCognitoRoleOverlyPermissiveCheck`<sup>Optional</sup> <a name="UnauthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations.property.unauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck UnauthenticatedCognitoRoleOverlyPermissiveCheck { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

The configuration for a specific audit check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#unauthenticated_cognito_role_overly_permissive_check IotAccountAuditConfiguration#unauthenticated_cognito_role_overly_permissive_check}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck {
    IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration Configuration = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a></code> | A structure containing the configName and corresponding configValue for configuring audit checks. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.configuration"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

A structure containing the configName and corresponding configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration {
    string CertAgeThresholdInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration.property.certAgeThresholdInDays">CertAgeThresholdInDays</a></code> | <code>string</code> | The configValue for configuring audit checks. |

---

##### `CertAgeThresholdInDays`<sup>Optional</sup> <a name="CertAgeThresholdInDays" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration.property.certAgeThresholdInDays"></a>

```csharp
public string CertAgeThresholdInDays { get; set; }
```

- *Type:* string

The configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#cert_age_threshold_in_days IotAccountAuditConfiguration#cert_age_threshold_in_days}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck {
    IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration Configuration = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a></code> | A structure containing the configName and corresponding configValue for configuring audit checks. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.configuration"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

A structure containing the configName and corresponding configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#configuration IotAccountAuditConfiguration#configuration}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration {
    string CertExpirationThresholdInDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration.property.certExpirationThresholdInDays">CertExpirationThresholdInDays</a></code> | <code>string</code> | The configValue for configuring audit checks. |

---

##### `CertExpirationThresholdInDays`<sup>Optional</sup> <a name="CertExpirationThresholdInDays" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration.property.certExpirationThresholdInDays"></a>

```csharp
public string CertExpirationThresholdInDays { get; set; }
```

- *Type:* string

The configValue for configuring audit checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#cert_expiration_threshold_in_days IotAccountAuditConfiguration#cert_expiration_threshold_in_days}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck <a name="IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if the check is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if the check is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

### IotAccountAuditConfigurationAuditNotificationTargetConfigurations <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditNotificationTargetConfigurations {
    IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns Sns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#sns IotAccountAuditConfiguration#sns}. |

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations.property.sns"></a>

```csharp
public IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns Sns { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#sns IotAccountAuditConfiguration#sns}.

---

### IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns {
    bool|IResolvable Enabled = null,
    string RoleArn = null,
    string TargetArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | True if notifications to the target are enabled. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the role that grants permission to send notifications to the target. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.targetArn">TargetArn</a></code> | <code>string</code> | The ARN of the target (SNS topic) to which audit notifications are sent. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

True if notifications to the target are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#enabled IotAccountAuditConfiguration#enabled}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the role that grants permission to send notifications to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}

---

##### `TargetArn`<sup>Optional</sup> <a name="TargetArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns.property.targetArn"></a>

```csharp
public string TargetArn { get; set; }
```

- *Type:* string

The ARN of the target (SNS topic) to which audit notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#target_arn IotAccountAuditConfiguration#target_arn}

---

### IotAccountAuditConfigurationConfig <a name="IotAccountAuditConfigurationConfig" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    IotAccountAuditConfigurationAuditCheckConfigurations AuditCheckConfigurations,
    string RoleArn,
    IotAccountAuditConfigurationAuditNotificationTargetConfigurations AuditNotificationTargetConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Your 12-digit account ID (used as the primary identifier for the CloudFormation resource). |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditCheckConfigurations">AuditCheckConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | Specifies which audit checks are enabled and disabled for this account. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditNotificationTargetConfigurations">AuditNotificationTargetConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | Information about the targets to which audit notifications are sent. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#account_id IotAccountAuditConfiguration#account_id}

---

##### `AuditCheckConfigurations`<sup>Required</sup> <a name="AuditCheckConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditCheckConfigurations"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurations AuditCheckConfigurations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

Specifies which audit checks are enabled and disabled for this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#audit_check_configurations IotAccountAuditConfiguration#audit_check_configurations}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#role_arn IotAccountAuditConfiguration#role_arn}

---

##### `AuditNotificationTargetConfigurations`<sup>Optional</sup> <a name="AuditNotificationTargetConfigurations" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationConfig.property.auditNotificationTargetConfigurations"></a>

```csharp
public IotAccountAuditConfigurationAuditNotificationTargetConfigurations AuditNotificationTargetConfigurations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

Information about the targets to which audit notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_account_audit_configuration#audit_notification_target_configurations IotAccountAuditConfiguration#audit_notification_target_configurations}

---

## Classes <a name="Classes" id="Classes"></a>

### IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resetCertAgeThresholdInDays">ResetCertAgeThresholdInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertAgeThresholdInDays` <a name="ResetCertAgeThresholdInDays" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.resetCertAgeThresholdInDays"></a>

```csharp
private void ResetCertAgeThresholdInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDaysInput">CertAgeThresholdInDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDays">CertAgeThresholdInDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertAgeThresholdInDaysInput`<sup>Optional</sup> <a name="CertAgeThresholdInDaysInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDaysInput"></a>

```csharp
public string CertAgeThresholdInDaysInput { get; }
```

- *Type:* string

---

##### `CertAgeThresholdInDays`<sup>Required</sup> <a name="CertAgeThresholdInDays" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.certAgeThresholdInDays"></a>

```csharp
public string CertAgeThresholdInDays { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.putConfiguration"></a>

```csharp
private void PutConfiguration(IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configuration"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.configurationInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckConfiguration</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resetCertExpirationThresholdInDays">ResetCertExpirationThresholdInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertExpirationThresholdInDays` <a name="ResetCertExpirationThresholdInDays" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.resetCertExpirationThresholdInDays"></a>

```csharp
private void ResetCertExpirationThresholdInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDaysInput">CertExpirationThresholdInDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDays">CertExpirationThresholdInDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertExpirationThresholdInDaysInput`<sup>Optional</sup> <a name="CertExpirationThresholdInDaysInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDaysInput"></a>

```csharp
public string CertExpirationThresholdInDaysInput { get; }
```

- *Type:* string

---

##### `CertExpirationThresholdInDays`<sup>Required</sup> <a name="CertExpirationThresholdInDays" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.certExpirationThresholdInDays"></a>

```csharp
public string CertExpirationThresholdInDays { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.putConfiguration"></a>

```csharp
private void PutConfiguration(IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configuration"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.configurationInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckConfiguration</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putAuthenticatedCognitoRoleOverlyPermissiveCheck">PutAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateExpiringCheck">PutCaCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateKeyQualityCheck">PutCaCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putConflictingClientIdsCheck">PutConflictingClientIdsCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck">PutDeviceCertificateAgeCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck">PutDeviceCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateKeyQualityCheck">PutDeviceCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateSharedCheck">PutDeviceCertificateSharedCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIntermediateCaRevokedForActiveDeviceCertificatesCheck">PutIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotPolicyOverlyPermissiveCheck">PutIotPolicyOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIoTPolicyPotentialMisConfigurationCheck">PutIoTPolicyPotentialMisConfigurationCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasAllowsAccessToUnusedServicesCheck">PutIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasOverlyPermissiveCheck">PutIotRoleAliasOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putLoggingDisabledCheck">PutLoggingDisabledCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedCaCertificateStillActiveCheck">PutRevokedCaCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedDeviceCertificateStillActiveCheck">PutRevokedDeviceCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putUnauthenticatedCognitoRoleOverlyPermissiveCheck">PutUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetAuthenticatedCognitoRoleOverlyPermissiveCheck">ResetAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateExpiringCheck">ResetCaCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateKeyQualityCheck">ResetCaCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetConflictingClientIdsCheck">ResetConflictingClientIdsCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateAgeCheck">ResetDeviceCertificateAgeCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateExpiringCheck">ResetDeviceCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateKeyQualityCheck">ResetDeviceCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateSharedCheck">ResetDeviceCertificateSharedCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIntermediateCaRevokedForActiveDeviceCertificatesCheck">ResetIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotPolicyOverlyPermissiveCheck">ResetIotPolicyOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIoTPolicyPotentialMisConfigurationCheck">ResetIoTPolicyPotentialMisConfigurationCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasAllowsAccessToUnusedServicesCheck">ResetIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasOverlyPermissiveCheck">ResetIotRoleAliasOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetLoggingDisabledCheck">ResetLoggingDisabledCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedCaCertificateStillActiveCheck">ResetRevokedCaCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedDeviceCertificateStillActiveCheck">ResetRevokedDeviceCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetUnauthenticatedCognitoRoleOverlyPermissiveCheck">ResetUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticatedCognitoRoleOverlyPermissiveCheck` <a name="PutAuthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putAuthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
private void PutAuthenticatedCognitoRoleOverlyPermissiveCheck(IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putAuthenticatedCognitoRoleOverlyPermissiveCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

---

##### `PutCaCertificateExpiringCheck` <a name="PutCaCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateExpiringCheck"></a>

```csharp
private void PutCaCertificateExpiringCheck(IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateExpiringCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

---

##### `PutCaCertificateKeyQualityCheck` <a name="PutCaCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateKeyQualityCheck"></a>

```csharp
private void PutCaCertificateKeyQualityCheck(IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putCaCertificateKeyQualityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

---

##### `PutConflictingClientIdsCheck` <a name="PutConflictingClientIdsCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putConflictingClientIdsCheck"></a>

```csharp
private void PutConflictingClientIdsCheck(IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putConflictingClientIdsCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

---

##### `PutDeviceCertificateAgeCheck` <a name="PutDeviceCertificateAgeCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck"></a>

```csharp
private void PutDeviceCertificateAgeCheck(IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateAgeCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

---

##### `PutDeviceCertificateExpiringCheck` <a name="PutDeviceCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck"></a>

```csharp
private void PutDeviceCertificateExpiringCheck(IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateExpiringCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

---

##### `PutDeviceCertificateKeyQualityCheck` <a name="PutDeviceCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateKeyQualityCheck"></a>

```csharp
private void PutDeviceCertificateKeyQualityCheck(IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateKeyQualityCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

---

##### `PutDeviceCertificateSharedCheck` <a name="PutDeviceCertificateSharedCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateSharedCheck"></a>

```csharp
private void PutDeviceCertificateSharedCheck(IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putDeviceCertificateSharedCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

---

##### `PutIntermediateCaRevokedForActiveDeviceCertificatesCheck` <a name="PutIntermediateCaRevokedForActiveDeviceCertificatesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIntermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```csharp
private void PutIntermediateCaRevokedForActiveDeviceCertificatesCheck(IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIntermediateCaRevokedForActiveDeviceCertificatesCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

---

##### `PutIotPolicyOverlyPermissiveCheck` <a name="PutIotPolicyOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotPolicyOverlyPermissiveCheck"></a>

```csharp
private void PutIotPolicyOverlyPermissiveCheck(IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotPolicyOverlyPermissiveCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

---

##### `PutIoTPolicyPotentialMisConfigurationCheck` <a name="PutIoTPolicyPotentialMisConfigurationCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIoTPolicyPotentialMisConfigurationCheck"></a>

```csharp
private void PutIoTPolicyPotentialMisConfigurationCheck(IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIoTPolicyPotentialMisConfigurationCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

---

##### `PutIotRoleAliasAllowsAccessToUnusedServicesCheck` <a name="PutIotRoleAliasAllowsAccessToUnusedServicesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```csharp
private void PutIotRoleAliasAllowsAccessToUnusedServicesCheck(IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasAllowsAccessToUnusedServicesCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

---

##### `PutIotRoleAliasOverlyPermissiveCheck` <a name="PutIotRoleAliasOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasOverlyPermissiveCheck"></a>

```csharp
private void PutIotRoleAliasOverlyPermissiveCheck(IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putIotRoleAliasOverlyPermissiveCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

---

##### `PutLoggingDisabledCheck` <a name="PutLoggingDisabledCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putLoggingDisabledCheck"></a>

```csharp
private void PutLoggingDisabledCheck(IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putLoggingDisabledCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

---

##### `PutRevokedCaCertificateStillActiveCheck` <a name="PutRevokedCaCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedCaCertificateStillActiveCheck"></a>

```csharp
private void PutRevokedCaCertificateStillActiveCheck(IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedCaCertificateStillActiveCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

---

##### `PutRevokedDeviceCertificateStillActiveCheck` <a name="PutRevokedDeviceCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedDeviceCertificateStillActiveCheck"></a>

```csharp
private void PutRevokedDeviceCertificateStillActiveCheck(IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putRevokedDeviceCertificateStillActiveCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

---

##### `PutUnauthenticatedCognitoRoleOverlyPermissiveCheck` <a name="PutUnauthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putUnauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
private void PutUnauthenticatedCognitoRoleOverlyPermissiveCheck(IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.putUnauthenticatedCognitoRoleOverlyPermissiveCheck.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

---

##### `ResetAuthenticatedCognitoRoleOverlyPermissiveCheck` <a name="ResetAuthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetAuthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
private void ResetAuthenticatedCognitoRoleOverlyPermissiveCheck()
```

##### `ResetCaCertificateExpiringCheck` <a name="ResetCaCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateExpiringCheck"></a>

```csharp
private void ResetCaCertificateExpiringCheck()
```

##### `ResetCaCertificateKeyQualityCheck` <a name="ResetCaCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetCaCertificateKeyQualityCheck"></a>

```csharp
private void ResetCaCertificateKeyQualityCheck()
```

##### `ResetConflictingClientIdsCheck` <a name="ResetConflictingClientIdsCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetConflictingClientIdsCheck"></a>

```csharp
private void ResetConflictingClientIdsCheck()
```

##### `ResetDeviceCertificateAgeCheck` <a name="ResetDeviceCertificateAgeCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateAgeCheck"></a>

```csharp
private void ResetDeviceCertificateAgeCheck()
```

##### `ResetDeviceCertificateExpiringCheck` <a name="ResetDeviceCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateExpiringCheck"></a>

```csharp
private void ResetDeviceCertificateExpiringCheck()
```

##### `ResetDeviceCertificateKeyQualityCheck` <a name="ResetDeviceCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateKeyQualityCheck"></a>

```csharp
private void ResetDeviceCertificateKeyQualityCheck()
```

##### `ResetDeviceCertificateSharedCheck` <a name="ResetDeviceCertificateSharedCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetDeviceCertificateSharedCheck"></a>

```csharp
private void ResetDeviceCertificateSharedCheck()
```

##### `ResetIntermediateCaRevokedForActiveDeviceCertificatesCheck` <a name="ResetIntermediateCaRevokedForActiveDeviceCertificatesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIntermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```csharp
private void ResetIntermediateCaRevokedForActiveDeviceCertificatesCheck()
```

##### `ResetIotPolicyOverlyPermissiveCheck` <a name="ResetIotPolicyOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotPolicyOverlyPermissiveCheck"></a>

```csharp
private void ResetIotPolicyOverlyPermissiveCheck()
```

##### `ResetIoTPolicyPotentialMisConfigurationCheck` <a name="ResetIoTPolicyPotentialMisConfigurationCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIoTPolicyPotentialMisConfigurationCheck"></a>

```csharp
private void ResetIoTPolicyPotentialMisConfigurationCheck()
```

##### `ResetIotRoleAliasAllowsAccessToUnusedServicesCheck` <a name="ResetIotRoleAliasAllowsAccessToUnusedServicesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```csharp
private void ResetIotRoleAliasAllowsAccessToUnusedServicesCheck()
```

##### `ResetIotRoleAliasOverlyPermissiveCheck` <a name="ResetIotRoleAliasOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetIotRoleAliasOverlyPermissiveCheck"></a>

```csharp
private void ResetIotRoleAliasOverlyPermissiveCheck()
```

##### `ResetLoggingDisabledCheck` <a name="ResetLoggingDisabledCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetLoggingDisabledCheck"></a>

```csharp
private void ResetLoggingDisabledCheck()
```

##### `ResetRevokedCaCertificateStillActiveCheck` <a name="ResetRevokedCaCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedCaCertificateStillActiveCheck"></a>

```csharp
private void ResetRevokedCaCertificateStillActiveCheck()
```

##### `ResetRevokedDeviceCertificateStillActiveCheck` <a name="ResetRevokedDeviceCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetRevokedDeviceCertificateStillActiveCheck"></a>

```csharp
private void ResetRevokedDeviceCertificateStillActiveCheck()
```

##### `ResetUnauthenticatedCognitoRoleOverlyPermissiveCheck` <a name="ResetUnauthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.resetUnauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
private void ResetUnauthenticatedCognitoRoleOverlyPermissiveCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheck">AuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheck">CaCertificateExpiringCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheck">CaCertificateKeyQualityCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheck">ConflictingClientIdsCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheck">DeviceCertificateAgeCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheck">DeviceCertificateExpiringCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheck">DeviceCertificateKeyQualityCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheck">DeviceCertificateSharedCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheck">IntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheck">IotPolicyOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheck">IoTPolicyPotentialMisConfigurationCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheck">IotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheck">IotRoleAliasOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheck">LoggingDisabledCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheck">RevokedCaCertificateStillActiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheck">RevokedDeviceCertificateStillActiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheck">UnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheckInput">AuthenticatedCognitoRoleOverlyPermissiveCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheckInput">CaCertificateExpiringCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheckInput">CaCertificateKeyQualityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheckInput">ConflictingClientIdsCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheckInput">DeviceCertificateAgeCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheckInput">DeviceCertificateExpiringCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheckInput">DeviceCertificateKeyQualityCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheckInput">DeviceCertificateSharedCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheckInput">IntermediateCaRevokedForActiveDeviceCertificatesCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheckInput">IotPolicyOverlyPermissiveCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheckInput">IoTPolicyPotentialMisConfigurationCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheckInput">IotRoleAliasAllowsAccessToUnusedServicesCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheckInput">IotRoleAliasOverlyPermissiveCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheckInput">LoggingDisabledCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheckInput">RevokedCaCertificateStillActiveCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheckInput">RevokedDeviceCertificateStillActiveCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheckInput">UnauthenticatedCognitoRoleOverlyPermissiveCheckInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticatedCognitoRoleOverlyPermissiveCheck`<sup>Required</sup> <a name="AuthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference AuthenticatedCognitoRoleOverlyPermissiveCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a>

---

##### `CaCertificateExpiringCheck`<sup>Required</sup> <a name="CaCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference CaCertificateExpiringCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheckOutputReference</a>

---

##### `CaCertificateKeyQualityCheck`<sup>Required</sup> <a name="CaCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference CaCertificateKeyQualityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheckOutputReference</a>

---

##### `ConflictingClientIdsCheck`<sup>Required</sup> <a name="ConflictingClientIdsCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference ConflictingClientIdsCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheckOutputReference</a>

---

##### `DeviceCertificateAgeCheck`<sup>Required</sup> <a name="DeviceCertificateAgeCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference DeviceCertificateAgeCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheckOutputReference</a>

---

##### `DeviceCertificateExpiringCheck`<sup>Required</sup> <a name="DeviceCertificateExpiringCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference DeviceCertificateExpiringCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheckOutputReference</a>

---

##### `DeviceCertificateKeyQualityCheck`<sup>Required</sup> <a name="DeviceCertificateKeyQualityCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference DeviceCertificateKeyQualityCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheckOutputReference</a>

---

##### `DeviceCertificateSharedCheck`<sup>Required</sup> <a name="DeviceCertificateSharedCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference DeviceCertificateSharedCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheckOutputReference</a>

---

##### `IntermediateCaRevokedForActiveDeviceCertificatesCheck`<sup>Required</sup> <a name="IntermediateCaRevokedForActiveDeviceCertificatesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference IntermediateCaRevokedForActiveDeviceCertificatesCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheckOutputReference</a>

---

##### `IotPolicyOverlyPermissiveCheck`<sup>Required</sup> <a name="IotPolicyOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference IotPolicyOverlyPermissiveCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheckOutputReference</a>

---

##### `IoTPolicyPotentialMisConfigurationCheck`<sup>Required</sup> <a name="IoTPolicyPotentialMisConfigurationCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference IoTPolicyPotentialMisConfigurationCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheckOutputReference</a>

---

##### `IotRoleAliasAllowsAccessToUnusedServicesCheck`<sup>Required</sup> <a name="IotRoleAliasAllowsAccessToUnusedServicesCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference IotRoleAliasAllowsAccessToUnusedServicesCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheckOutputReference</a>

---

##### `IotRoleAliasOverlyPermissiveCheck`<sup>Required</sup> <a name="IotRoleAliasOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference IotRoleAliasOverlyPermissiveCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheckOutputReference</a>

---

##### `LoggingDisabledCheck`<sup>Required</sup> <a name="LoggingDisabledCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference LoggingDisabledCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheckOutputReference</a>

---

##### `RevokedCaCertificateStillActiveCheck`<sup>Required</sup> <a name="RevokedCaCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference RevokedCaCertificateStillActiveCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference</a>

---

##### `RevokedDeviceCertificateStillActiveCheck`<sup>Required</sup> <a name="RevokedDeviceCertificateStillActiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference RevokedDeviceCertificateStillActiveCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference</a>

---

##### `UnauthenticatedCognitoRoleOverlyPermissiveCheck`<sup>Required</sup> <a name="UnauthenticatedCognitoRoleOverlyPermissiveCheck" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheck"></a>

```csharp
public IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference UnauthenticatedCognitoRoleOverlyPermissiveCheck { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference</a>

---

##### `AuthenticatedCognitoRoleOverlyPermissiveCheckInput`<sup>Optional</sup> <a name="AuthenticatedCognitoRoleOverlyPermissiveCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.authenticatedCognitoRoleOverlyPermissiveCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck AuthenticatedCognitoRoleOverlyPermissiveCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsAuthenticatedCognitoRoleOverlyPermissiveCheck</a>

---

##### `CaCertificateExpiringCheckInput`<sup>Optional</sup> <a name="CaCertificateExpiringCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateExpiringCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck CaCertificateExpiringCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateExpiringCheck</a>

---

##### `CaCertificateKeyQualityCheckInput`<sup>Optional</sup> <a name="CaCertificateKeyQualityCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.caCertificateKeyQualityCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck CaCertificateKeyQualityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsCaCertificateKeyQualityCheck</a>

---

##### `ConflictingClientIdsCheckInput`<sup>Optional</sup> <a name="ConflictingClientIdsCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.conflictingClientIdsCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck ConflictingClientIdsCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck">IotAccountAuditConfigurationAuditCheckConfigurationsConflictingClientIdsCheck</a>

---

##### `DeviceCertificateAgeCheckInput`<sup>Optional</sup> <a name="DeviceCertificateAgeCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateAgeCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck DeviceCertificateAgeCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateAgeCheck</a>

---

##### `DeviceCertificateExpiringCheckInput`<sup>Optional</sup> <a name="DeviceCertificateExpiringCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateExpiringCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck DeviceCertificateExpiringCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateExpiringCheck</a>

---

##### `DeviceCertificateKeyQualityCheckInput`<sup>Optional</sup> <a name="DeviceCertificateKeyQualityCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateKeyQualityCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck DeviceCertificateKeyQualityCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateKeyQualityCheck</a>

---

##### `DeviceCertificateSharedCheckInput`<sup>Optional</sup> <a name="DeviceCertificateSharedCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.deviceCertificateSharedCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck DeviceCertificateSharedCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck">IotAccountAuditConfigurationAuditCheckConfigurationsDeviceCertificateSharedCheck</a>

---

##### `IntermediateCaRevokedForActiveDeviceCertificatesCheckInput`<sup>Optional</sup> <a name="IntermediateCaRevokedForActiveDeviceCertificatesCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.intermediateCaRevokedForActiveDeviceCertificatesCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck IntermediateCaRevokedForActiveDeviceCertificatesCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIntermediateCaRevokedForActiveDeviceCertificatesCheck</a>

---

##### `IotPolicyOverlyPermissiveCheckInput`<sup>Optional</sup> <a name="IotPolicyOverlyPermissiveCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotPolicyOverlyPermissiveCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck IotPolicyOverlyPermissiveCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotPolicyOverlyPermissiveCheck</a>

---

##### `IoTPolicyPotentialMisConfigurationCheckInput`<sup>Optional</sup> <a name="IoTPolicyPotentialMisConfigurationCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.ioTPolicyPotentialMisConfigurationCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck IoTPolicyPotentialMisConfigurationCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIoTPolicyPotentialMisConfigurationCheck</a>

---

##### `IotRoleAliasAllowsAccessToUnusedServicesCheckInput`<sup>Optional</sup> <a name="IotRoleAliasAllowsAccessToUnusedServicesCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasAllowsAccessToUnusedServicesCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck IotRoleAliasAllowsAccessToUnusedServicesCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasAllowsAccessToUnusedServicesCheck</a>

---

##### `IotRoleAliasOverlyPermissiveCheckInput`<sup>Optional</sup> <a name="IotRoleAliasOverlyPermissiveCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.iotRoleAliasOverlyPermissiveCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck IotRoleAliasOverlyPermissiveCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsIotRoleAliasOverlyPermissiveCheck</a>

---

##### `LoggingDisabledCheckInput`<sup>Optional</sup> <a name="LoggingDisabledCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.loggingDisabledCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck LoggingDisabledCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck">IotAccountAuditConfigurationAuditCheckConfigurationsLoggingDisabledCheck</a>

---

##### `RevokedCaCertificateStillActiveCheckInput`<sup>Optional</sup> <a name="RevokedCaCertificateStillActiveCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedCaCertificateStillActiveCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck RevokedCaCertificateStillActiveCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

---

##### `RevokedDeviceCertificateStillActiveCheckInput`<sup>Optional</sup> <a name="RevokedDeviceCertificateStillActiveCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.revokedDeviceCertificateStillActiveCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck RevokedDeviceCertificateStillActiveCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

---

##### `UnauthenticatedCognitoRoleOverlyPermissiveCheckInput`<sup>Optional</sup> <a name="UnauthenticatedCognitoRoleOverlyPermissiveCheckInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.unauthenticatedCognitoRoleOverlyPermissiveCheckInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck UnauthenticatedCognitoRoleOverlyPermissiveCheckInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurations">IotAccountAuditConfigurationAuditCheckConfigurations</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedCaCertificateStillActiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsRevokedDeviceCertificateStillActiveCheck</a>

---


### IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference <a name="IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck">IotAccountAuditConfigurationAuditCheckConfigurationsUnauthenticatedCognitoRoleOverlyPermissiveCheck</a>

---


### IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns">PutSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resetSns">ResetSns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSns` <a name="PutSns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns"></a>

```csharp
private void PutSns(IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

---

##### `ResetSns` <a name="ResetSns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.resetSns"></a>

```csharp
private void ResetSns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.sns">Sns</a></code> | <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.snsInput">SnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sns`<sup>Required</sup> <a name="Sns" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.sns"></a>

```csharp
public IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference Sns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference</a>

---

##### `SnsInput`<sup>Optional</sup> <a name="SnsInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.snsInput"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns SnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditNotificationTargetConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurations">IotAccountAuditConfigurationAuditNotificationTargetConfigurations</a>

---


### IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference <a name="IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetTargetArn">ResetTargetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTargetArn` <a name="ResetTargetArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.resetTargetArn"></a>

```csharp
private void ResetTargetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArnInput"></a>

```csharp
public string TargetArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotAccountAuditConfiguration.IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns">IotAccountAuditConfigurationAuditNotificationTargetConfigurationsSns</a>

---



