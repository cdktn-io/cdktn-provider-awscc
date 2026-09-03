# `connectInstance` Submodule <a name="`connectInstance` Submodule" id="@cdktn/provider-awscc.connectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstance <a name="ConnectInstance" id="@cdktn/provider-awscc.connectInstance.ConnectInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance awscc_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstance(Construct Scope, string Id, ConnectInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias">ResetInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes"></a>

```csharp
private void PutAttributes(ConnectInstanceAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectInstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

---

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetInstanceAlias` <a name="ResetInstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias"></a>

```csharp
private void ResetInstanceAlias()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus">InstanceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput">IdentityManagementTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput">InstanceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType">IdentityManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias">InstanceAlias</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes"></a>

```csharp
public ConnectInstanceAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceStatus`<sup>Required</sup> <a name="InstanceStatus" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus"></a>

```csharp
public string InstanceStatus { get; }
```

- *Type:* string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags"></a>

```csharp
public ConnectInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput"></a>

```csharp
public IResolvable|ConnectInstanceAttributes AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `IdentityManagementTypeInput`<sup>Optional</sup> <a name="IdentityManagementTypeInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput"></a>

```csharp
public string IdentityManagementTypeInput { get; }
```

- *Type:* string

---

##### `InstanceAliasInput`<sup>Optional</sup> <a name="InstanceAliasInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput"></a>

```csharp
public string InstanceAliasInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput"></a>

```csharp
public IResolvable|ConnectInstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `IdentityManagementType`<sup>Required</sup> <a name="IdentityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType"></a>

```csharp
public string IdentityManagementType { get; }
```

- *Type:* string

---

##### `InstanceAlias`<sup>Required</sup> <a name="InstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias"></a>

```csharp
public string InstanceAlias { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceAttributes <a name="ConnectInstanceAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstanceAttributes {
    bool|IResolvable InboundCalls,
    bool|IResolvable OutboundCalls,
    bool|IResolvable AutoResolveBestVoices = null,
    bool|IResolvable ContactflowLogs = null,
    bool|IResolvable ContactLens = null,
    bool|IResolvable EarlyMedia = null,
    bool|IResolvable EnhancedChatMonitoring = null,
    bool|IResolvable EnhancedContactMonitoring = null,
    bool|IResolvable HighVolumeOutBound = null,
    bool|IResolvable MessageStreaming = null,
    bool|IResolvable MultiPartyChatConference = null,
    bool|IResolvable MultiPartyConference = null,
    bool|IResolvable UseCustomTtsVoices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls">InboundCalls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Mandatory element which enables inbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls">OutboundCalls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Mandatory element which enables outbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices">AutoResolveBestVoices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs">ContactflowLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables CONTACTFLOW_LOGS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens">ContactLens</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables CONTACT_LENS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia">EarlyMedia</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables EARLY_MEDIA on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring">EnhancedChatMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring">EnhancedContactMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound">HighVolumeOutBound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming">MessageStreaming</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables MESSAGE_STREAMING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference">MultiPartyChatConference</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference">MultiPartyConference</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices">UseCustomTtsVoices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance. |

---

##### `InboundCalls`<sup>Required</sup> <a name="InboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls"></a>

```csharp
public bool|IResolvable InboundCalls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Mandatory element which enables inbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#inbound_calls ConnectInstance#inbound_calls}

---

##### `OutboundCalls`<sup>Required</sup> <a name="OutboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls"></a>

```csharp
public bool|IResolvable OutboundCalls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Mandatory element which enables outbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#outbound_calls ConnectInstance#outbound_calls}

---

##### `AutoResolveBestVoices`<sup>Optional</sup> <a name="AutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices"></a>

```csharp
public bool|IResolvable AutoResolveBestVoices { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#auto_resolve_best_voices ConnectInstance#auto_resolve_best_voices}

---

##### `ContactflowLogs`<sup>Optional</sup> <a name="ContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs"></a>

```csharp
public bool|IResolvable ContactflowLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables CONTACTFLOW_LOGS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#contactflow_logs ConnectInstance#contactflow_logs}

---

##### `ContactLens`<sup>Optional</sup> <a name="ContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens"></a>

```csharp
public bool|IResolvable ContactLens { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables CONTACT_LENS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#contact_lens ConnectInstance#contact_lens}

---

##### `EarlyMedia`<sup>Optional</sup> <a name="EarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia"></a>

```csharp
public bool|IResolvable EarlyMedia { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables EARLY_MEDIA on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#early_media ConnectInstance#early_media}

---

##### `EnhancedChatMonitoring`<sup>Optional</sup> <a name="EnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring"></a>

```csharp
public bool|IResolvable EnhancedChatMonitoring { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#enhanced_chat_monitoring ConnectInstance#enhanced_chat_monitoring}

---

##### `EnhancedContactMonitoring`<sup>Optional</sup> <a name="EnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring"></a>

```csharp
public bool|IResolvable EnhancedContactMonitoring { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#enhanced_contact_monitoring ConnectInstance#enhanced_contact_monitoring}

---

##### `HighVolumeOutBound`<sup>Optional</sup> <a name="HighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound"></a>

```csharp
public bool|IResolvable HighVolumeOutBound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#high_volume_out_bound ConnectInstance#high_volume_out_bound}

---

##### `MessageStreaming`<sup>Optional</sup> <a name="MessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming"></a>

```csharp
public bool|IResolvable MessageStreaming { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables MESSAGE_STREAMING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#message_streaming ConnectInstance#message_streaming}

---

##### `MultiPartyChatConference`<sup>Optional</sup> <a name="MultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference"></a>

```csharp
public bool|IResolvable MultiPartyChatConference { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#multi_party_chat_conference ConnectInstance#multi_party_chat_conference}

---

##### `MultiPartyConference`<sup>Optional</sup> <a name="MultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference"></a>

```csharp
public bool|IResolvable MultiPartyConference { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#multi_party_conference ConnectInstance#multi_party_conference}

---

##### `UseCustomTtsVoices`<sup>Optional</sup> <a name="UseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices"></a>

```csharp
public bool|IResolvable UseCustomTtsVoices { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#use_custom_tts_voices ConnectInstance#use_custom_tts_voices}

---

### ConnectInstanceConfig <a name="ConnectInstanceConfig" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ConnectInstanceAttributes Attributes,
    string IdentityManagementType,
    string DirectoryId = null,
    string InstanceAlias = null,
    IResolvable|ConnectInstanceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType">IdentityManagementType</a></code> | <code>string</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId">DirectoryId</a></code> | <code>string</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias">InstanceAlias</a></code> | <code>string</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes"></a>

```csharp
public ConnectInstanceAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `IdentityManagementType`<sup>Required</sup> <a name="IdentityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType"></a>

```csharp
public string IdentityManagementType { get; set; }
```

- *Type:* string

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `InstanceAlias`<sup>Optional</sup> <a name="InstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias"></a>

```csharp
public string InstanceAlias { get; set; }
```

- *Type:* string

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags"></a>

```csharp
public IResolvable|ConnectInstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

### ConnectInstanceTags <a name="ConnectInstanceTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#key ConnectInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_instance#value ConnectInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceAttributesOutputReference <a name="ConnectInstanceAttributesOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstanceAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices">ResetAutoResolveBestVoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs">ResetContactflowLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens">ResetContactLens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia">ResetEarlyMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring">ResetEnhancedChatMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring">ResetEnhancedContactMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound">ResetHighVolumeOutBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming">ResetMessageStreaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference">ResetMultiPartyChatConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference">ResetMultiPartyConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices">ResetUseCustomTtsVoices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoResolveBestVoices` <a name="ResetAutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices"></a>

```csharp
private void ResetAutoResolveBestVoices()
```

##### `ResetContactflowLogs` <a name="ResetContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs"></a>

```csharp
private void ResetContactflowLogs()
```

##### `ResetContactLens` <a name="ResetContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens"></a>

```csharp
private void ResetContactLens()
```

##### `ResetEarlyMedia` <a name="ResetEarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia"></a>

```csharp
private void ResetEarlyMedia()
```

##### `ResetEnhancedChatMonitoring` <a name="ResetEnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring"></a>

```csharp
private void ResetEnhancedChatMonitoring()
```

##### `ResetEnhancedContactMonitoring` <a name="ResetEnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring"></a>

```csharp
private void ResetEnhancedContactMonitoring()
```

##### `ResetHighVolumeOutBound` <a name="ResetHighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound"></a>

```csharp
private void ResetHighVolumeOutBound()
```

##### `ResetMessageStreaming` <a name="ResetMessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming"></a>

```csharp
private void ResetMessageStreaming()
```

##### `ResetMultiPartyChatConference` <a name="ResetMultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference"></a>

```csharp
private void ResetMultiPartyChatConference()
```

##### `ResetMultiPartyConference` <a name="ResetMultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference"></a>

```csharp
private void ResetMultiPartyConference()
```

##### `ResetUseCustomTtsVoices` <a name="ResetUseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices"></a>

```csharp
private void ResetUseCustomTtsVoices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput">AutoResolveBestVoicesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput">ContactflowLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput">ContactLensInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput">EarlyMediaInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput">EnhancedChatMonitoringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput">EnhancedContactMonitoringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput">HighVolumeOutBoundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput">InboundCallsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput">MessageStreamingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput">MultiPartyChatConferenceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput">MultiPartyConferenceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput">OutboundCallsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput">UseCustomTtsVoicesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices">AutoResolveBestVoices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs">ContactflowLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens">ContactLens</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia">EarlyMedia</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring">EnhancedChatMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring">EnhancedContactMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound">HighVolumeOutBound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls">InboundCalls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming">MessageStreaming</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference">MultiPartyChatConference</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference">MultiPartyConference</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls">OutboundCalls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices">UseCustomTtsVoices</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResolveBestVoicesInput`<sup>Optional</sup> <a name="AutoResolveBestVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput"></a>

```csharp
public bool|IResolvable AutoResolveBestVoicesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContactflowLogsInput`<sup>Optional</sup> <a name="ContactflowLogsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput"></a>

```csharp
public bool|IResolvable ContactflowLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContactLensInput`<sup>Optional</sup> <a name="ContactLensInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput"></a>

```csharp
public bool|IResolvable ContactLensInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EarlyMediaInput`<sup>Optional</sup> <a name="EarlyMediaInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput"></a>

```csharp
public bool|IResolvable EarlyMediaInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnhancedChatMonitoringInput`<sup>Optional</sup> <a name="EnhancedChatMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput"></a>

```csharp
public bool|IResolvable EnhancedChatMonitoringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnhancedContactMonitoringInput`<sup>Optional</sup> <a name="EnhancedContactMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput"></a>

```csharp
public bool|IResolvable EnhancedContactMonitoringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HighVolumeOutBoundInput`<sup>Optional</sup> <a name="HighVolumeOutBoundInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput"></a>

```csharp
public bool|IResolvable HighVolumeOutBoundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InboundCallsInput`<sup>Optional</sup> <a name="InboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput"></a>

```csharp
public bool|IResolvable InboundCallsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageStreamingInput`<sup>Optional</sup> <a name="MessageStreamingInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput"></a>

```csharp
public bool|IResolvable MessageStreamingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MultiPartyChatConferenceInput`<sup>Optional</sup> <a name="MultiPartyChatConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput"></a>

```csharp
public bool|IResolvable MultiPartyChatConferenceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MultiPartyConferenceInput`<sup>Optional</sup> <a name="MultiPartyConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput"></a>

```csharp
public bool|IResolvable MultiPartyConferenceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutboundCallsInput`<sup>Optional</sup> <a name="OutboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput"></a>

```csharp
public bool|IResolvable OutboundCallsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseCustomTtsVoicesInput`<sup>Optional</sup> <a name="UseCustomTtsVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput"></a>

```csharp
public bool|IResolvable UseCustomTtsVoicesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoResolveBestVoices`<sup>Required</sup> <a name="AutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices"></a>

```csharp
public bool|IResolvable AutoResolveBestVoices { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContactflowLogs`<sup>Required</sup> <a name="ContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs"></a>

```csharp
public bool|IResolvable ContactflowLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContactLens`<sup>Required</sup> <a name="ContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens"></a>

```csharp
public bool|IResolvable ContactLens { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EarlyMedia`<sup>Required</sup> <a name="EarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia"></a>

```csharp
public bool|IResolvable EarlyMedia { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnhancedChatMonitoring`<sup>Required</sup> <a name="EnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring"></a>

```csharp
public bool|IResolvable EnhancedChatMonitoring { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnhancedContactMonitoring`<sup>Required</sup> <a name="EnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring"></a>

```csharp
public bool|IResolvable EnhancedContactMonitoring { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HighVolumeOutBound`<sup>Required</sup> <a name="HighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound"></a>

```csharp
public bool|IResolvable HighVolumeOutBound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InboundCalls`<sup>Required</sup> <a name="InboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls"></a>

```csharp
public bool|IResolvable InboundCalls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessageStreaming`<sup>Required</sup> <a name="MessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming"></a>

```csharp
public bool|IResolvable MessageStreaming { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MultiPartyChatConference`<sup>Required</sup> <a name="MultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference"></a>

```csharp
public bool|IResolvable MultiPartyChatConference { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MultiPartyConference`<sup>Required</sup> <a name="MultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference"></a>

```csharp
public bool|IResolvable MultiPartyConference { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutboundCalls`<sup>Required</sup> <a name="OutboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls"></a>

```csharp
public bool|IResolvable OutboundCalls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UseCustomTtsVoices`<sup>Required</sup> <a name="UseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices"></a>

```csharp
public bool|IResolvable UseCustomTtsVoices { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectInstanceAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---


### ConnectInstanceTagsList <a name="ConnectInstanceTagsList" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get"></a>

```csharp
private ConnectInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectInstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>[]

---


### ConnectInstanceTagsOutputReference <a name="ConnectInstanceTagsOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectInstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>

---



