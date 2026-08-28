# `globalacceleratorListener` Submodule <a name="`globalacceleratorListener` Submodule" id="@cdktn/provider-awscc.globalacceleratorListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorListener <a name="GlobalacceleratorListener" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener awscc_globalaccelerator_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorListener(Construct Scope, string Id, GlobalacceleratorListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig">GlobalacceleratorListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig">GlobalacceleratorListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity">ResetClientAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPortRanges` <a name="PutPortRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.putPortRanges"></a>

```csharp
private void PutPortRanges(IResolvable|GlobalacceleratorListenerPortRanges[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.putPortRanges.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

---

##### `ResetClientAffinity` <a name="ResetClientAffinity" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity"></a>

```csharp
private void ResetClientAffinity()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorListener resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorListener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorListener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorListener.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlobalacceleratorListener.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlobalacceleratorListener resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorListener to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList">GlobalacceleratorListenerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput">AcceleratorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput">ClientAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRangesInput">PortRangesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn">AcceleratorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity">ClientAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRanges"></a>

```csharp
public GlobalacceleratorListenerPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList">GlobalacceleratorListenerPortRangesList</a>

---

##### `AcceleratorArnInput`<sup>Optional</sup> <a name="AcceleratorArnInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput"></a>

```csharp
public string AcceleratorArnInput { get; }
```

- *Type:* string

---

##### `ClientAffinityInput`<sup>Optional</sup> <a name="ClientAffinityInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput"></a>

```csharp
public string ClientAffinityInput { get; }
```

- *Type:* string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.portRangesInput"></a>

```csharp
public IResolvable|GlobalacceleratorListenerPortRanges[] PortRangesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn"></a>

```csharp
public string AcceleratorArn { get; }
```

- *Type:* string

---

##### `ClientAffinity`<sup>Required</sup> <a name="ClientAffinity" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity"></a>

```csharp
public string ClientAffinity { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorListenerConfig <a name="GlobalacceleratorListenerConfig" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorListenerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AcceleratorArn,
    IResolvable|GlobalacceleratorListenerPortRanges[] PortRanges,
    string ClientAffinity = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn">AcceleratorArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRanges">PortRanges</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#port_ranges GlobalacceleratorListener#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity">ClientAffinity</a></code> | <code>string</code> | Client affinity lets you direct all requests from a user to the same endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol">Protocol</a></code> | <code>string</code> | The protocol for the listener. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn"></a>

```csharp
public string AcceleratorArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRanges"></a>

```csharp
public IResolvable|GlobalacceleratorListenerPortRanges[] PortRanges { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#port_ranges GlobalacceleratorListener#port_ranges}.

---

##### `ClientAffinity`<sup>Optional</sup> <a name="ClientAffinity" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity"></a>

```csharp
public string ClientAffinity { get; set; }
```

- *Type:* string

Client affinity lets you direct all requests from a user to the same endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}

---

### GlobalacceleratorListenerPortRanges <a name="GlobalacceleratorListenerPortRanges" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorListenerPortRanges {
    double FromPort,
    double ToPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.fromPort">FromPort</a></code> | <code>double</code> | A network port number. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.toPort">ToPort</a></code> | <code>double</code> | A network port number. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorListenerPortRangesList <a name="GlobalacceleratorListenerPortRangesList" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorListenerPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.get"></a>

```csharp
private GlobalacceleratorListenerPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesList.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorListenerPortRanges[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>[]

---


### GlobalacceleratorListenerPortRangesOutputReference <a name="GlobalacceleratorListenerPortRangesOutputReference" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlobalacceleratorListenerPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRangesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlobalacceleratorListenerPortRanges InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorListener.GlobalacceleratorListenerPortRanges">GlobalacceleratorListenerPortRanges</a>

---



