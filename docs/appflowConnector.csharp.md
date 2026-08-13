# `appflowConnector` Submodule <a name="`appflowConnector` Submodule" id="@cdktn/provider-awscc.appflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppflowConnector <a name="AppflowConnector" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector awscc_appflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppflowConnector(Construct Scope, string Id, AppflowConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig">AppflowConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig">AppflowConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig">PutConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel">ResetConnectorLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectorProvisioningConfig` <a name="PutConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig"></a>

```csharp
private void PutConnectorProvisioningConfig(AppflowConnectorConnectorProvisioningConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `ResetConnectorLabel` <a name="ResetConnectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel"></a>

```csharp
private void ResetConnectorLabel()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppflowConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppflowConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppflowConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppflowConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppflowConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig">ConnectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput">ConnectorLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput">ConnectorProvisioningConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput">ConnectorProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel">ConnectorLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType">ConnectorProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description">Description</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `ConnectorProvisioningConfig`<sup>Required</sup> <a name="ConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig"></a>

```csharp
public AppflowConnectorConnectorProvisioningConfigOutputReference ConnectorProvisioningConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConnectorLabelInput`<sup>Optional</sup> <a name="ConnectorLabelInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput"></a>

```csharp
public string ConnectorLabelInput { get; }
```

- *Type:* string

---

##### `ConnectorProvisioningConfigInput`<sup>Optional</sup> <a name="ConnectorProvisioningConfigInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput"></a>

```csharp
public IResolvable|AppflowConnectorConnectorProvisioningConfig ConnectorProvisioningConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `ConnectorProvisioningTypeInput`<sup>Optional</sup> <a name="ConnectorProvisioningTypeInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput"></a>

```csharp
public string ConnectorProvisioningTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ConnectorLabel`<sup>Required</sup> <a name="ConnectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel"></a>

```csharp
public string ConnectorLabel { get; }
```

- *Type:* string

---

##### `ConnectorProvisioningType`<sup>Required</sup> <a name="ConnectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType"></a>

```csharp
public string ConnectorProvisioningType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppflowConnectorConfig <a name="AppflowConnectorConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppflowConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AppflowConnectorConnectorProvisioningConfig ConnectorProvisioningConfig,
    string ConnectorProvisioningType,
    string ConnectorLabel = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig">ConnectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | Contains information about the configuration of the connector being registered. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType">ConnectorProvisioningType</a></code> | <code>string</code> | The provisioning type of the connector. Currently the only supported value is LAMBDA. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel">ConnectorLabel</a></code> | <code>string</code> | The name of the connector. The name is unique for each ConnectorRegistration in your AWS account. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description">Description</a></code> | <code>string</code> | A description about the connector that's being registered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectorProvisioningConfig`<sup>Required</sup> <a name="ConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig"></a>

```csharp
public AppflowConnectorConnectorProvisioningConfig ConnectorProvisioningConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

Contains information about the configuration of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#connector_provisioning_config AppflowConnector#connector_provisioning_config}

---

##### `ConnectorProvisioningType`<sup>Required</sup> <a name="ConnectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType"></a>

```csharp
public string ConnectorProvisioningType { get; set; }
```

- *Type:* string

The provisioning type of the connector. Currently the only supported value is LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#connector_provisioning_type AppflowConnector#connector_provisioning_type}

---

##### `ConnectorLabel`<sup>Optional</sup> <a name="ConnectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel"></a>

```csharp
public string ConnectorLabel { get; set; }
```

- *Type:* string

The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#connector_label AppflowConnector#connector_label}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description about the connector that's being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#description AppflowConnector#description}

---

### AppflowConnectorConnectorProvisioningConfig <a name="AppflowConnectorConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppflowConnectorConnectorProvisioningConfig {
    AppflowConnectorConnectorProvisioningConfigLambda Lambda = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | Contains information about the configuration of the lambda which is being registered as the connector. |

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda"></a>

```csharp
public AppflowConnectorConnectorProvisioningConfigLambda Lambda { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

Contains information about the configuration of the lambda which is being registered as the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#lambda AppflowConnector#lambda}

---

### AppflowConnectorConnectorProvisioningConfigLambda <a name="AppflowConnectorConnectorProvisioningConfigLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppflowConnectorConnectorProvisioningConfigLambda {
    string LambdaArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Lambda ARN of the connector being registered. |

---

##### `LambdaArn`<sup>Optional</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Lambda ARN of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appflow_connector#lambda_arn AppflowConnector#lambda_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppflowConnectorConnectorProvisioningConfigLambdaOutputReference <a name="AppflowConnectorConnectorProvisioningConfigLambdaOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppflowConnectorConnectorProvisioningConfigLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn">ResetLambdaArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambdaArn` <a name="ResetLambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn"></a>

```csharp
private void ResetLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppflowConnectorConnectorProvisioningConfigLambda InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---


### AppflowConnectorConnectorProvisioningConfigOutputReference <a name="AppflowConnectorConnectorProvisioningConfigOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppflowConnectorConnectorProvisioningConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda">PutLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambda` <a name="PutLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda"></a>

```csharp
private void PutLambda(AppflowConnectorConnectorProvisioningConfigLambda Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda"></a>

```csharp
private void ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda"></a>

```csharp
public AppflowConnectorConnectorProvisioningConfigLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a>

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput"></a>

```csharp
public IResolvable|AppflowConnectorConnectorProvisioningConfigLambda LambdaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppflowConnectorConnectorProvisioningConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---



