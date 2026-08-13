# `docdbEventSubscription` Submodule <a name="`docdbEventSubscription` Submodule" id="@cdktn/provider-awscc.docdbEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbEventSubscription <a name="DocdbEventSubscription" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription awscc_docdb_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbEventSubscription(Construct Scope, string Id, DocdbEventSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig">DocdbEventSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig">DocdbEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEventCategories">ResetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceIds">ResetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSubscriptionName">ResetSubscriptionName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEventCategories` <a name="ResetEventCategories" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEventCategories"></a>

```csharp
private void ResetEventCategories()
```

##### `ResetSourceIds` <a name="ResetSourceIds" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceIds"></a>

```csharp
private void ResetSourceIds()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

##### `ResetSubscriptionName` <a name="ResetSubscriptionName" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSubscriptionName"></a>

```csharp
private void ResetSubscriptionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbEventSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbEventSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbEventSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DocdbEventSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DocdbEventSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbEventSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DocdbEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategoriesInput">EventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIdsInput">SourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionNameInput">SubscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIds">SourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventCategoriesInput`<sup>Optional</sup> <a name="EventCategoriesInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategoriesInput"></a>

```csharp
public string[] EventCategoriesInput { get; }
```

- *Type:* string[]

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SourceIdsInput`<sup>Optional</sup> <a name="SourceIdsInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIdsInput"></a>

```csharp
public string[] SourceIdsInput { get; }
```

- *Type:* string[]

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `SubscriptionNameInput`<sup>Optional</sup> <a name="SubscriptionNameInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionNameInput"></a>

```csharp
public string SubscriptionNameInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `SourceIds`<sup>Required</sup> <a name="SourceIds" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIds"></a>

```csharp
public string[] SourceIds { get; }
```

- *Type:* string[]

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbEventSubscriptionConfig <a name="DocdbEventSubscriptionConfig" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DocdbEventSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SnsTopicArn,
    bool|IResolvable Enabled = null,
    string[] EventCategories = null,
    string[] SourceIds = null,
    string SourceType = null,
    string SubscriptionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value; |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | A list of event categories for a SourceType that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceIds">SourceIds</a></code> | <code>string[]</code> | The list of identifiers of the event sources for which events are returned. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceType">SourceType</a></code> | <code>string</code> | The type of source that is generating the events. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | The name of the subscription. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the SNS topic created for event notification.

Amazon SNS creates the ARN when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#sns_topic_arn DocdbEventSubscription#sns_topic_arn}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value;

set to true to activate the subscription, set to false to create the subscription but not active it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#enabled DocdbEventSubscription#enabled}

---

##### `EventCategories`<sup>Optional</sup> <a name="EventCategories" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; set; }
```

- *Type:* string[]

A list of event categories for a SourceType that you want to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#event_categories DocdbEventSubscription#event_categories}

---

##### `SourceIds`<sup>Optional</sup> <a name="SourceIds" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceIds"></a>

```csharp
public string[] SourceIds { get; set; }
```

- *Type:* string[]

The list of identifiers of the event sources for which events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#source_ids DocdbEventSubscription#source_ids}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

The type of source that is generating the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#source_type DocdbEventSubscription#source_type}

---

##### `SubscriptionName`<sup>Optional</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; set; }
```

- *Type:* string

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/docdb_event_subscription#subscription_name DocdbEventSubscription#subscription_name}

---



