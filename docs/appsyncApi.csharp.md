# `appsyncApi` Submodule <a name="`appsyncApi` Submodule" id="@cdktn/provider-awscc.appsyncApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApi <a name="AppsyncApi" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api awscc_appsync_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApi(Construct Scope, string Id, AppsyncApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig">AppsyncApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig">AppsyncApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig">PutEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig">ResetEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact">ResetOwnerContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventConfig` <a name="PutEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig"></a>

```csharp
private void PutEventConfig(AppsyncApiEventConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putEventConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags"></a>

```csharp
private void PutTags(IResolvable|AppsyncApiTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]

---

##### `ResetEventConfig` <a name="ResetEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetEventConfig"></a>

```csharp
private void ResetEventConfig()
```

##### `ResetOwnerContact` <a name="ResetOwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetOwnerContact"></a>

```csharp
private void ResetOwnerContact()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn">ApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns">Dns</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig">EventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput">EventConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput">OwnerContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact">OwnerContact</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiArn`<sup>Required</sup> <a name="ApiArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiArn"></a>

```csharp
public string ApiArn { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.dns"></a>

```csharp
public AppsyncApiDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference">AppsyncApiDnsOutputReference</a>

---

##### `EventConfig`<sup>Required</sup> <a name="EventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfig"></a>

```csharp
public AppsyncApiEventConfigOutputReference EventConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference">AppsyncApiEventConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tags"></a>

```csharp
public AppsyncApiTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList">AppsyncApiTagsList</a>

---

##### `EventConfigInput`<sup>Optional</sup> <a name="EventConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.eventConfigInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfig EventConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerContactInput`<sup>Optional</sup> <a name="OwnerContactInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContactInput"></a>

```csharp
public string OwnerContactInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tagsInput"></a>

```csharp
public IResolvable|AppsyncApiTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerContact`<sup>Required</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.ownerContact"></a>

```csharp
public string OwnerContact { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiConfig <a name="AppsyncApiConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    AppsyncApiEventConfig EventConfig = null,
    string OwnerContact = null,
    IResolvable|AppsyncApiTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name">Name</a></code> | <code>string</code> | The name of the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig">EventConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | The configuration for an Event Api. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact">OwnerContact</a></code> | <code>string</code> | The owner contact information for an API resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this AppSync API. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#name AppsyncApi#name}

---

##### `EventConfig`<sup>Optional</sup> <a name="EventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.eventConfig"></a>

```csharp
public AppsyncApiEventConfig EventConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

The configuration for an Event Api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#event_config AppsyncApi#event_config}

---

##### `OwnerContact`<sup>Optional</sup> <a name="OwnerContact" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.ownerContact"></a>

```csharp
public string OwnerContact { get; set; }
```

- *Type:* string

The owner contact information for an API resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#owner_contact AppsyncApi#owner_contact}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiConfig.property.tags"></a>

```csharp
public IResolvable|AppsyncApiTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]

An arbitrary set of tags (key-value pairs) for this AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#tags AppsyncApi#tags}

---

### AppsyncApiDns <a name="AppsyncApiDns" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiDns {

};
```


### AppsyncApiEventConfig <a name="AppsyncApiEventConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfig {
    IResolvable|AppsyncApiEventConfigAuthProviders[] AuthProviders = null,
    IResolvable|AppsyncApiEventConfigConnectionAuthModes[] ConnectionAuthModes = null,
    IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes[] DefaultPublishAuthModes = null,
    IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes[] DefaultSubscribeAuthModes = null,
    AppsyncApiEventConfigLogConfig LogConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders">AuthProviders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]</code> | A list of auth providers for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes">ConnectionAuthModes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes">DefaultPublishAuthModes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes">DefaultSubscribeAuthModes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]</code> | A list of auth modes for the AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | The log config for the AppSync API. |

---

##### `AuthProviders`<sup>Optional</sup> <a name="AuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.authProviders"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProviders[] AuthProviders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]

A list of auth providers for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_providers AppsyncApi#auth_providers}

---

##### `ConnectionAuthModes`<sup>Optional</sup> <a name="ConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.connectionAuthModes"></a>

```csharp
public IResolvable|AppsyncApiEventConfigConnectionAuthModes[] ConnectionAuthModes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#connection_auth_modes AppsyncApi#connection_auth_modes}

---

##### `DefaultPublishAuthModes`<sup>Optional</sup> <a name="DefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultPublishAuthModes"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes[] DefaultPublishAuthModes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#default_publish_auth_modes AppsyncApi#default_publish_auth_modes}

---

##### `DefaultSubscribeAuthModes`<sup>Optional</sup> <a name="DefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.defaultSubscribeAuthModes"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes[] DefaultSubscribeAuthModes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]

A list of auth modes for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#default_subscribe_auth_modes AppsyncApi#default_subscribe_auth_modes}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig.property.logConfig"></a>

```csharp
public AppsyncApiEventConfigLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

The log config for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#log_config AppsyncApi#log_config}

---

### AppsyncApiEventConfigAuthProviders <a name="AppsyncApiEventConfigAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProviders {
    string AuthType = null,
    AppsyncApiEventConfigAuthProvidersCognitoConfig CognitoConfig = null,
    AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig LambdaAuthorizerConfig = null,
    AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig OpenIdConnectConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType">AuthType</a></code> | <code>string</code> | Security configuration for your AppSync API. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | Optional authorization configuration for using Amazon Cognito user pools with your API endpoint. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | The OpenID Connect configuration. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

##### `CognitoConfig`<sup>Optional</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.cognitoConfig"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersCognitoConfig CognitoConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

Optional authorization configuration for using Amazon Cognito user pools with your API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cognito_config AppsyncApi#cognito_config}

---

##### `LambdaAuthorizerConfig`<sup>Optional</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig LambdaAuthorizerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

A LambdaAuthorizerConfig holds configuration on how to authorize AWS AppSync API access when using the AWS_LAMBDA authorizer mode.

Be aware that an AWS AppSync API may have only one Lambda authorizer configured at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#lambda_authorizer_config AppsyncApi#lambda_authorizer_config}

---

##### `OpenIdConnectConfig`<sup>Optional</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders.property.openIdConnectConfig"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig OpenIdConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

The OpenID Connect configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#open_id_connect_config AppsyncApi#open_id_connect_config}

---

### AppsyncApiEventConfigAuthProvidersCognitoConfig <a name="AppsyncApiEventConfigAuthProvidersCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersCognitoConfig {
    string AppIdClientRegex = null,
    string AwsRegion = null,
    string UserPoolId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}. |

---

##### `AppIdClientRegex`<sup>Optional</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#app_id_client_regex AppsyncApi#app_id_client_regex}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#aws_region AppsyncApi#aws_region}.

---

##### `UserPoolId`<sup>Optional</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#user_pool_id AppsyncApi#user_pool_id}.

---

### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig {
    double AuthorizerResultTtlInSeconds = null,
    string AuthorizerUri = null,
    string IdentityValidationExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}. |

---

##### `AuthorizerResultTtlInSeconds`<sup>Optional</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_result_ttl_in_seconds AppsyncApi#authorizer_result_ttl_in_seconds}.

---

##### `AuthorizerUri`<sup>Optional</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#authorizer_uri AppsyncApi#authorizer_uri}.

---

##### `IdentityValidationExpression`<sup>Optional</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#identity_validation_expression AppsyncApi#identity_validation_expression}.

---

### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig {
    double AuthTtl = null,
    string ClientId = null,
    double IatTtl = null,
    string Issuer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl">AuthTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl">IatTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}. |

---

##### `AuthTtl`<sup>Optional</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.authTtl"></a>

```csharp
public double AuthTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_ttl AppsyncApi#auth_ttl}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#client_id AppsyncApi#client_id}.

---

##### `IatTtl`<sup>Optional</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.iatTtl"></a>

```csharp
public double IatTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#iat_ttl AppsyncApi#iat_ttl}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#issuer AppsyncApi#issuer}.

---

### AppsyncApiEventConfigConnectionAuthModes <a name="AppsyncApiEventConfigConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigConnectionAuthModes {
    string AuthType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType">AuthType</a></code> | <code>string</code> | Security configuration for your AppSync API. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultPublishAuthModes <a name="AppsyncApiEventConfigDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigDefaultPublishAuthModes {
    string AuthType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType">AuthType</a></code> | <code>string</code> | Security configuration for your AppSync API. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigDefaultSubscribeAuthModes <a name="AppsyncApiEventConfigDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigDefaultSubscribeAuthModes {
    string AuthType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType">AuthType</a></code> | <code>string</code> | Security configuration for your AppSync API. |

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Security configuration for your AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#auth_type AppsyncApi#auth_type}

---

### AppsyncApiEventConfigLogConfig <a name="AppsyncApiEventConfigLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigLogConfig {
    string CloudwatchLogsRoleArn = null,
    string LogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | Logging level for the AppSync API. |

---

##### `CloudwatchLogsRoleArn`<sup>Optional</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.cloudwatchLogsRoleArn"></a>

```csharp
public string CloudwatchLogsRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#cloudwatch_logs_role_arn AppsyncApi#cloudwatch_logs_role_arn}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Logging level for the AppSync API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#log_level AppsyncApi#log_level}

---

### AppsyncApiTags <a name="AppsyncApiTags" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key">Key</a></code> | <code>string</code> | A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value">Value</a></code> | <code>string</code> | A string containing the value for this tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#key AppsyncApi#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_api#value AppsyncApi#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncApiDnsOutputReference <a name="AppsyncApiDnsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http">Http</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime">Realtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.http"></a>

```csharp
public string Http { get; }
```

- *Type:* string

---

##### `Realtime`<sup>Required</sup> <a name="Realtime" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.realtime"></a>

```csharp
public string Realtime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiDnsOutputReference.property.internalValue"></a>

```csharp
public AppsyncApiDns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiDns">AppsyncApiDns</a>

---


### AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex">ResetAppIdClientRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId">ResetUserPoolId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIdClientRegex` <a name="ResetAppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAppIdClientRegex"></a>

```csharp
private void ResetAppIdClientRegex()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetAwsRegion"></a>

```csharp
private void ResetAwsRegion()
```

##### `ResetUserPoolId` <a name="ResetUserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.resetUserPoolId"></a>

```csharp
private void ResetUserPoolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput">AppIdClientRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex">AppIdClientRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIdClientRegexInput`<sup>Optional</sup> <a name="AppIdClientRegexInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegexInput"></a>

```csharp
public string AppIdClientRegexInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `AppIdClientRegex`<sup>Required</sup> <a name="AppIdClientRegex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.appIdClientRegex"></a>

```csharp
public string AppIdClientRegex { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProvidersCognitoConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---


### AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds">ResetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri">ResetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression">ResetIdentityValidationExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizerResultTtlInSeconds` <a name="ResetAuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerResultTtlInSeconds"></a>

```csharp
private void ResetAuthorizerResultTtlInSeconds()
```

##### `ResetAuthorizerUri` <a name="ResetAuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetAuthorizerUri"></a>

```csharp
private void ResetAuthorizerUri()
```

##### `ResetIdentityValidationExpression` <a name="ResetIdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.resetIdentityValidationExpression"></a>

```csharp
private void ResetIdentityValidationExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput">AuthorizerResultTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput">AuthorizerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput">IdentityValidationExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds">AuthorizerResultTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri">AuthorizerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression">IdentityValidationExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="AuthorizerResultTtlInSecondsInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSecondsInput"></a>

```csharp
public double AuthorizerResultTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `AuthorizerUriInput`<sup>Optional</sup> <a name="AuthorizerUriInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUriInput"></a>

```csharp
public string AuthorizerUriInput { get; }
```

- *Type:* string

---

##### `IdentityValidationExpressionInput`<sup>Optional</sup> <a name="IdentityValidationExpressionInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpressionInput"></a>

```csharp
public string IdentityValidationExpressionInput { get; }
```

- *Type:* string

---

##### `AuthorizerResultTtlInSeconds`<sup>Required</sup> <a name="AuthorizerResultTtlInSeconds" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerResultTtlInSeconds"></a>

```csharp
public double AuthorizerResultTtlInSeconds { get; }
```

- *Type:* double

---

##### `AuthorizerUri`<sup>Required</sup> <a name="AuthorizerUri" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.authorizerUri"></a>

```csharp
public string AuthorizerUri { get; }
```

- *Type:* string

---

##### `IdentityValidationExpression`<sup>Required</sup> <a name="IdentityValidationExpression" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.identityValidationExpression"></a>

```csharp
public string IdentityValidationExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---


### AppsyncApiEventConfigAuthProvidersList <a name="AppsyncApiEventConfigAuthProvidersList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get"></a>

```csharp
private AppsyncApiEventConfigAuthProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProviders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]

---


### AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference <a name="AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl">ResetAuthTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl">ResetIatTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthTtl` <a name="ResetAuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetAuthTtl"></a>

```csharp
private void ResetAuthTtl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetIatTtl` <a name="ResetIatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIatTtl"></a>

```csharp
private void ResetIatTtl()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput">AuthTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput">IatTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl">AuthTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl">IatTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTtlInput`<sup>Optional</sup> <a name="AuthTtlInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtlInput"></a>

```csharp
public double AuthTtlInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `IatTtlInput`<sup>Optional</sup> <a name="IatTtlInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtlInput"></a>

```csharp
public double IatTtlInput { get; }
```

- *Type:* double

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `AuthTtl`<sup>Required</sup> <a name="AuthTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.authTtl"></a>

```csharp
public double AuthTtl { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `IatTtl`<sup>Required</sup> <a name="IatTtl" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.iatTtl"></a>

```csharp
public double IatTtl { get; }
```

- *Type:* double

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---


### AppsyncApiEventConfigAuthProvidersOutputReference <a name="AppsyncApiEventConfigAuthProvidersOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigAuthProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig">PutCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig">PutLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig">PutOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig">ResetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig">ResetLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig">ResetOpenIdConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCognitoConfig` <a name="PutCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig"></a>

```csharp
private void PutCognitoConfig(AppsyncApiEventConfigAuthProvidersCognitoConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---

##### `PutLambdaAuthorizerConfig` <a name="PutLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig"></a>

```csharp
private void PutLambdaAuthorizerConfig(AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putLambdaAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---

##### `PutOpenIdConnectConfig` <a name="PutOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig"></a>

```csharp
private void PutOpenIdConnectConfig(AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.putOpenIdConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetCognitoConfig` <a name="ResetCognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetCognitoConfig"></a>

```csharp
private void ResetCognitoConfig()
```

##### `ResetLambdaAuthorizerConfig` <a name="ResetLambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetLambdaAuthorizerConfig"></a>

```csharp
private void ResetLambdaAuthorizerConfig()
```

##### `ResetOpenIdConnectConfig` <a name="ResetOpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.resetOpenIdConnectConfig"></a>

```csharp
private void ResetOpenIdConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig">CognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig">LambdaAuthorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig">OpenIdConnectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput">CognitoConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput">LambdaAuthorizerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput">OpenIdConnectConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CognitoConfig`<sup>Required</sup> <a name="CognitoConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfig"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference CognitoConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference">AppsyncApiEventConfigAuthProvidersCognitoConfigOutputReference</a>

---

##### `LambdaAuthorizerConfig`<sup>Required</sup> <a name="LambdaAuthorizerConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfig"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference LambdaAuthorizerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfigOutputReference</a>

---

##### `OpenIdConnectConfig`<sup>Required</sup> <a name="OpenIdConnectConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfig"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference OpenIdConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfigOutputReference</a>

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `CognitoConfigInput`<sup>Optional</sup> <a name="CognitoConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.cognitoConfigInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProvidersCognitoConfig CognitoConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersCognitoConfig">AppsyncApiEventConfigAuthProvidersCognitoConfig</a>

---

##### `LambdaAuthorizerConfigInput`<sup>Optional</sup> <a name="LambdaAuthorizerConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.lambdaAuthorizerConfigInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig LambdaAuthorizerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig">AppsyncApiEventConfigAuthProvidersLambdaAuthorizerConfig</a>

---

##### `OpenIdConnectConfigInput`<sup>Optional</sup> <a name="OpenIdConnectConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.openIdConnectConfigInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig OpenIdConnectConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig">AppsyncApiEventConfigAuthProvidersOpenIdConnectConfig</a>

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProviders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>

---


### AppsyncApiEventConfigConnectionAuthModesList <a name="AppsyncApiEventConfigConnectionAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigConnectionAuthModesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get"></a>

```csharp
private AppsyncApiEventConfigConnectionAuthModesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigConnectionAuthModes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]

---


### AppsyncApiEventConfigConnectionAuthModesOutputReference <a name="AppsyncApiEventConfigConnectionAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigConnectionAuthModesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigConnectionAuthModes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>

---


### AppsyncApiEventConfigDefaultPublishAuthModesList <a name="AppsyncApiEventConfigDefaultPublishAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigDefaultPublishAuthModesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get"></a>

```csharp
private AppsyncApiEventConfigDefaultPublishAuthModesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]

---


### AppsyncApiEventConfigDefaultPublishAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultPublishAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigDefaultPublishAuthModesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesList <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigDefaultSubscribeAuthModesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get"></a>

```csharp
private AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]

---


### AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference <a name="AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>

---


### AppsyncApiEventConfigLogConfigOutputReference <a name="AppsyncApiEventConfigLogConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn">ResetCloudwatchLogsRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsRoleArn` <a name="ResetCloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetCloudwatchLogsRoleArn"></a>

```csharp
private void ResetCloudwatchLogsRoleArn()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput">CloudwatchLogsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsRoleArnInput`<sup>Optional</sup> <a name="CloudwatchLogsRoleArnInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArnInput"></a>

```csharp
public string CloudwatchLogsRoleArnInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.cloudwatchLogsRoleArn"></a>

```csharp
public string CloudwatchLogsRoleArn { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfigLogConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---


### AppsyncApiEventConfigOutputReference <a name="AppsyncApiEventConfigOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiEventConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders">PutAuthProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes">PutConnectionAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes">PutDefaultPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes">PutDefaultSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders">ResetAuthProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes">ResetConnectionAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes">ResetDefaultPublishAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes">ResetDefaultSubscribeAuthModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig">ResetLogConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthProviders` <a name="PutAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders"></a>

```csharp
private void PutAuthProviders(IResolvable|AppsyncApiEventConfigAuthProviders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putAuthProviders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]

---

##### `PutConnectionAuthModes` <a name="PutConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes"></a>

```csharp
private void PutConnectionAuthModes(IResolvable|AppsyncApiEventConfigConnectionAuthModes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putConnectionAuthModes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]

---

##### `PutDefaultPublishAuthModes` <a name="PutDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes"></a>

```csharp
private void PutDefaultPublishAuthModes(IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultPublishAuthModes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]

---

##### `PutDefaultSubscribeAuthModes` <a name="PutDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes"></a>

```csharp
private void PutDefaultSubscribeAuthModes(IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putDefaultSubscribeAuthModes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig"></a>

```csharp
private void PutLogConfig(AppsyncApiEventConfigLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---

##### `ResetAuthProviders` <a name="ResetAuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetAuthProviders"></a>

```csharp
private void ResetAuthProviders()
```

##### `ResetConnectionAuthModes` <a name="ResetConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetConnectionAuthModes"></a>

```csharp
private void ResetConnectionAuthModes()
```

##### `ResetDefaultPublishAuthModes` <a name="ResetDefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultPublishAuthModes"></a>

```csharp
private void ResetDefaultPublishAuthModes()
```

##### `ResetDefaultSubscribeAuthModes` <a name="ResetDefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetDefaultSubscribeAuthModes"></a>

```csharp
private void ResetDefaultSubscribeAuthModes()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders">AuthProviders</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes">ConnectionAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes">DefaultPublishAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes">DefaultSubscribeAuthModes</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput">AuthProvidersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput">ConnectionAuthModesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput">DefaultPublishAuthModesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput">DefaultSubscribeAuthModesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput">LogConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthProviders`<sup>Required</sup> <a name="AuthProviders" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProviders"></a>

```csharp
public AppsyncApiEventConfigAuthProvidersList AuthProviders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProvidersList">AppsyncApiEventConfigAuthProvidersList</a>

---

##### `ConnectionAuthModes`<sup>Required</sup> <a name="ConnectionAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModes"></a>

```csharp
public AppsyncApiEventConfigConnectionAuthModesList ConnectionAuthModes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModesList">AppsyncApiEventConfigConnectionAuthModesList</a>

---

##### `DefaultPublishAuthModes`<sup>Required</sup> <a name="DefaultPublishAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModes"></a>

```csharp
public AppsyncApiEventConfigDefaultPublishAuthModesList DefaultPublishAuthModes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModesList">AppsyncApiEventConfigDefaultPublishAuthModesList</a>

---

##### `DefaultSubscribeAuthModes`<sup>Required</sup> <a name="DefaultSubscribeAuthModes" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModes"></a>

```csharp
public AppsyncApiEventConfigDefaultSubscribeAuthModesList DefaultSubscribeAuthModes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModesList">AppsyncApiEventConfigDefaultSubscribeAuthModesList</a>

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfig"></a>

```csharp
public AppsyncApiEventConfigLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfigOutputReference">AppsyncApiEventConfigLogConfigOutputReference</a>

---

##### `AuthProvidersInput`<sup>Optional</sup> <a name="AuthProvidersInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.authProvidersInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigAuthProviders[] AuthProvidersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigAuthProviders">AppsyncApiEventConfigAuthProviders</a>[]

---

##### `ConnectionAuthModesInput`<sup>Optional</sup> <a name="ConnectionAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.connectionAuthModesInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigConnectionAuthModes[] ConnectionAuthModesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigConnectionAuthModes">AppsyncApiEventConfigConnectionAuthModes</a>[]

---

##### `DefaultPublishAuthModesInput`<sup>Optional</sup> <a name="DefaultPublishAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultPublishAuthModesInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultPublishAuthModes[] DefaultPublishAuthModesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultPublishAuthModes">AppsyncApiEventConfigDefaultPublishAuthModes</a>[]

---

##### `DefaultSubscribeAuthModesInput`<sup>Optional</sup> <a name="DefaultSubscribeAuthModesInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.defaultSubscribeAuthModesInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigDefaultSubscribeAuthModes[] DefaultSubscribeAuthModesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigDefaultSubscribeAuthModes">AppsyncApiEventConfigDefaultSubscribeAuthModes</a>[]

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.logConfigInput"></a>

```csharp
public IResolvable|AppsyncApiEventConfigLogConfig LogConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigLogConfig">AppsyncApiEventConfigLogConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiEventConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiEventConfig">AppsyncApiEventConfig</a>

---


### AppsyncApiTagsList <a name="AppsyncApiTagsList" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get"></a>

```csharp
private AppsyncApiTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>[]

---


### AppsyncApiTagsOutputReference <a name="AppsyncApiTagsOutputReference" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appsyncApi.AppsyncApiTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsyncApiTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appsyncApi.AppsyncApiTags">AppsyncApiTags</a>

---



