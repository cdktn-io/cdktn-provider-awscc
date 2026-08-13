# `connectContactFlowModule` Submodule <a name="`connectContactFlowModule` Submodule" id="@cdktn/provider-awscc.connectContactFlowModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectContactFlowModule <a name="ConnectContactFlowModule" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module awscc_connect_contact_flow_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModule(Construct Scope, string Id, ConnectContactFlowModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig">ConnectContactFlowModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putExternalInvocationConfiguration">PutExternalInvocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetExternalInvocationConfiguration">ResetExternalInvocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalInvocationConfiguration` <a name="PutExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putExternalInvocationConfiguration"></a>

```csharp
private void PutExternalInvocationConfiguration(ConnectContactFlowModuleExternalInvocationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putExternalInvocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectContactFlowModuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExternalInvocationConfiguration` <a name="ResetExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetExternalInvocationConfiguration"></a>

```csharp
private void ResetExternalInvocationConfiguration()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectContactFlowModule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectContactFlowModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectContactFlowModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectContactFlowModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectContactFlowModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectContactFlowModule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectContactFlowModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectContactFlowModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectContactFlowModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleArn">ContactFlowModuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfiguration">ExternalInvocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference">ConnectContactFlowModuleExternalInvocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList">ConnectContactFlowModuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfigurationInput">ExternalInvocationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ContactFlowModuleArn`<sup>Required</sup> <a name="ContactFlowModuleArn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contactFlowModuleArn"></a>

```csharp
public string ContactFlowModuleArn { get; }
```

- *Type:* string

---

##### `ExternalInvocationConfiguration`<sup>Required</sup> <a name="ExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfiguration"></a>

```csharp
public ConnectContactFlowModuleExternalInvocationConfigurationOutputReference ExternalInvocationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference">ConnectContactFlowModuleExternalInvocationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tags"></a>

```csharp
public ConnectContactFlowModuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList">ConnectContactFlowModuleTagsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExternalInvocationConfigurationInput`<sup>Optional</sup> <a name="ExternalInvocationConfigurationInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.externalInvocationConfigurationInput"></a>

```csharp
public IResolvable|ConnectContactFlowModuleExternalInvocationConfiguration ExternalInvocationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tagsInput"></a>

```csharp
public IResolvable|ConnectContactFlowModuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectContactFlowModuleConfig <a name="ConnectContactFlowModuleConfig" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Content,
    string InstanceArn,
    string Name,
    string Description = null,
    ConnectContactFlowModuleExternalInvocationConfiguration ExternalInvocationConfiguration = null,
    string Settings = null,
    string State = null,
    IResolvable|ConnectContactFlowModuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content">Content</a></code> | <code>string</code> | The content of the contact flow module in JSON format. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance (ARN). |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the contact flow module. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the contact flow module. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.externalInvocationConfiguration">ExternalInvocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a></code> | Defines the external invocation configuration of the flow module resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.settings">Settings</a></code> | <code>string</code> | The schema of the settings for contact flow module in JSON Schema V4 format. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.state">State</a></code> | <code>string</code> | The state of the contact flow module. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The content of the contact flow module in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#content ConnectContactFlowModule#content}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#instance_arn ConnectContactFlowModule#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the contact flow module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#name ConnectContactFlowModule#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the contact flow module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#description ConnectContactFlowModule#description}

---

##### `ExternalInvocationConfiguration`<sup>Optional</sup> <a name="ExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.externalInvocationConfiguration"></a>

```csharp
public ConnectContactFlowModuleExternalInvocationConfiguration ExternalInvocationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a>

Defines the external invocation configuration of the flow module resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#external_invocation_configuration ConnectContactFlowModule#external_invocation_configuration}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

The schema of the settings for contact flow module in JSON Schema V4 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#settings ConnectContactFlowModule#settings}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state of the contact flow module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#state ConnectContactFlowModule#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleConfig.property.tags"></a>

```csharp
public IResolvable|ConnectContactFlowModuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#tags ConnectContactFlowModule#tags}

---

### ConnectContactFlowModuleExternalInvocationConfiguration <a name="ConnectContactFlowModuleExternalInvocationConfiguration" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModuleExternalInvocationConfiguration {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the flow module resource is enabled for external invocation. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the flow module resource is enabled for external invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#enabled ConnectContactFlowModule#enabled}

---

### ConnectContactFlowModuleTags <a name="ConnectContactFlowModuleTags" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#key ConnectContactFlowModule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_contact_flow_module#value ConnectContactFlowModule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectContactFlowModuleExternalInvocationConfigurationOutputReference <a name="ConnectContactFlowModuleExternalInvocationConfigurationOutputReference" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModuleExternalInvocationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectContactFlowModuleExternalInvocationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleExternalInvocationConfiguration">ConnectContactFlowModuleExternalInvocationConfiguration</a>

---


### ConnectContactFlowModuleTagsList <a name="ConnectContactFlowModuleTagsList" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.get"></a>

```csharp
private ConnectContactFlowModuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectContactFlowModuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>[]

---


### ConnectContactFlowModuleTagsOutputReference <a name="ConnectContactFlowModuleTagsOutputReference" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectContactFlowModuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectContactFlowModuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectContactFlowModule.ConnectContactFlowModuleTags">ConnectContactFlowModuleTags</a>

---



