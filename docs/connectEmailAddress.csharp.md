# `connectEmailAddress` Submodule <a name="`connectEmailAddress` Submodule" id="@cdktn/provider-awscc.connectEmailAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectEmailAddress <a name="ConnectEmailAddress" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address awscc_connect_email_address}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddress(Construct Scope, string Id, ConnectEmailAddressConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig">ConnectEmailAddressConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig">ConnectEmailAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putAliasConfigurations">PutAliasConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetAliasConfigurations">ResetAliasConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAliasConfigurations` <a name="PutAliasConfigurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putAliasConfigurations"></a>

```csharp
private void PutAliasConfigurations(IResolvable|ConnectEmailAddressAliasConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putAliasConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putTags"></a>

```csharp
private void PutTags(IResolvable|ConnectEmailAddressTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]

---

##### `ResetAliasConfigurations` <a name="ResetAliasConfigurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetAliasConfigurations"></a>

```csharp
private void ResetAliasConfigurations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectEmailAddress resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectEmailAddress.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectEmailAddress.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectEmailAddress.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ConnectEmailAddress.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ConnectEmailAddress resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectEmailAddress to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectEmailAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ConnectEmailAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurations">AliasConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList">ConnectEmailAddressAliasConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressArn">EmailAddressArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList">ConnectEmailAddressTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurationsInput">AliasConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AliasConfigurations`<sup>Required</sup> <a name="AliasConfigurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurations"></a>

```csharp
public ConnectEmailAddressAliasConfigurationsList AliasConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList">ConnectEmailAddressAliasConfigurationsList</a>

---

##### `EmailAddressArn`<sup>Required</sup> <a name="EmailAddressArn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressArn"></a>

```csharp
public string EmailAddressArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tags"></a>

```csharp
public ConnectEmailAddressTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList">ConnectEmailAddressTagsList</a>

---

##### `AliasConfigurationsInput`<sup>Optional</sup> <a name="AliasConfigurationsInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.aliasConfigurationsInput"></a>

```csharp
public IResolvable|ConnectEmailAddressAliasConfigurations[] AliasConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tagsInput"></a>

```csharp
public IResolvable|ConnectEmailAddressTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddress.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectEmailAddressAliasConfigurations <a name="ConnectEmailAddressAliasConfigurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressAliasConfigurations {
    string EmailAddressArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations.property.emailAddressArn">EmailAddressArn</a></code> | <code>string</code> | The identifier of the email address alias. |

---

##### `EmailAddressArn`<sup>Optional</sup> <a name="EmailAddressArn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations.property.emailAddressArn"></a>

```csharp
public string EmailAddressArn { get; set; }
```

- *Type:* string

The identifier of the email address alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#email_address_arn ConnectEmailAddress#email_address_arn}

---

### ConnectEmailAddressConfig <a name="ConnectEmailAddressConfig" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EmailAddress,
    string InstanceArn,
    IResolvable|ConnectEmailAddressAliasConfigurations[] AliasConfigurations = null,
    string Description = null,
    string DisplayName = null,
    IResolvable|ConnectEmailAddressTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Email address to be created for this instance. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.aliasConfigurations">AliasConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]</code> | List of alias configurations for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.description">Description</a></code> | <code>string</code> | A description for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the email address. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]</code> | One or more tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Email address to be created for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#email_address ConnectEmailAddress#email_address}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#instance_arn ConnectEmailAddress#instance_arn}

---

##### `AliasConfigurations`<sup>Optional</sup> <a name="AliasConfigurations" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.aliasConfigurations"></a>

```csharp
public IResolvable|ConnectEmailAddressAliasConfigurations[] AliasConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]

List of alias configurations for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#alias_configurations ConnectEmailAddress#alias_configurations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#description ConnectEmailAddress#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#display_name ConnectEmailAddress#display_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressConfig.property.tags"></a>

```csharp
public IResolvable|ConnectEmailAddressTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#tags ConnectEmailAddress#tags}

---

### ConnectEmailAddressTags <a name="ConnectEmailAddressTags" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#key ConnectEmailAddress#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_email_address#value ConnectEmailAddress#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectEmailAddressAliasConfigurationsList <a name="ConnectEmailAddressAliasConfigurationsList" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressAliasConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.get"></a>

```csharp
private ConnectEmailAddressAliasConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectEmailAddressAliasConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>[]

---


### ConnectEmailAddressAliasConfigurationsOutputReference <a name="ConnectEmailAddressAliasConfigurationsOutputReference" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressAliasConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resetEmailAddressArn">ResetEmailAddressArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddressArn` <a name="ResetEmailAddressArn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.resetEmailAddressArn"></a>

```csharp
private void ResetEmailAddressArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArnInput">EmailAddressArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArn">EmailAddressArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressArnInput`<sup>Optional</sup> <a name="EmailAddressArnInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArnInput"></a>

```csharp
public string EmailAddressArnInput { get; }
```

- *Type:* string

---

##### `EmailAddressArn`<sup>Required</sup> <a name="EmailAddressArn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.emailAddressArn"></a>

```csharp
public string EmailAddressArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectEmailAddressAliasConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressAliasConfigurations">ConnectEmailAddressAliasConfigurations</a>

---


### ConnectEmailAddressTagsList <a name="ConnectEmailAddressTagsList" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.get"></a>

```csharp
private ConnectEmailAddressTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsList.property.internalValue"></a>

```csharp
public IResolvable|ConnectEmailAddressTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>[]

---


### ConnectEmailAddressTagsOutputReference <a name="ConnectEmailAddressTagsOutputReference" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ConnectEmailAddressTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConnectEmailAddressTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectEmailAddress.ConnectEmailAddressTags">ConnectEmailAddressTags</a>

---



