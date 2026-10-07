# `appsyncApiCache` Submodule <a name="`appsyncApiCache` Submodule" id="@cdktn/provider-awscc.appsyncApiCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApiCache <a name="AppsyncApiCache" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache awscc_appsync_api_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiCache(Construct Scope, string Id, AppsyncApiCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig">AppsyncApiCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig">AppsyncApiCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled">ResetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetHealthMetricsConfig">ResetHealthMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled">ResetTransitEncryptionEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAtRestEncryptionEnabled` <a name="ResetAtRestEncryptionEnabled" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled"></a>

```csharp
private void ResetAtRestEncryptionEnabled()
```

##### `ResetHealthMetricsConfig` <a name="ResetHealthMetricsConfig" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetHealthMetricsConfig"></a>

```csharp
private void ResetHealthMetricsConfig()
```

##### `ResetTransitEncryptionEnabled` <a name="ResetTransitEncryptionEnabled" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled"></a>

```csharp
private void ResetTransitEncryptionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncApiCache resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApiCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApiCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApiCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppsyncApiCache.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsyncApiCache resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncApiCache to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncApiCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncApiCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiCacheId">ApiCacheId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput">ApiCachingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput">AtRestEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.healthMetricsConfigInput">HealthMetricsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput">TransitEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior">ApiCachingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.healthMetricsConfig">HealthMetricsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiCacheId`<sup>Required</sup> <a name="ApiCacheId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiCacheId"></a>

```csharp
public string ApiCacheId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ApiCachingBehaviorInput`<sup>Optional</sup> <a name="ApiCachingBehaviorInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput"></a>

```csharp
public string ApiCachingBehaviorInput { get; }
```

- *Type:* string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `AtRestEncryptionEnabledInput`<sup>Optional</sup> <a name="AtRestEncryptionEnabledInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable AtRestEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HealthMetricsConfigInput`<sup>Optional</sup> <a name="HealthMetricsConfigInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.healthMetricsConfigInput"></a>

```csharp
public string HealthMetricsConfigInput { get; }
```

- *Type:* string

---

##### `TransitEncryptionEnabledInput`<sup>Optional</sup> <a name="TransitEncryptionEnabledInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable TransitEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiCachingBehavior`<sup>Required</sup> <a name="ApiCachingBehavior" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior"></a>

```csharp
public string ApiCachingBehavior { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled"></a>

```csharp
public bool|IResolvable AtRestEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HealthMetricsConfig`<sup>Required</sup> <a name="HealthMetricsConfig" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.healthMetricsConfig"></a>

```csharp
public string HealthMetricsConfig { get; }
```

- *Type:* string

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled"></a>

```csharp
public bool|IResolvable TransitEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiCacheConfig <a name="AppsyncApiCacheConfig" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppsyncApiCacheConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiCachingBehavior,
    string ApiId,
    double Ttl,
    string Type,
    bool|IResolvable AtRestEncryptionEnabled = null,
    string HealthMetricsConfig = null,
    bool|IResolvable TransitEncryptionEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior">ApiCachingBehavior</a></code> | <code>string</code> | Caching behavior, such as FULL_REQUEST_CACHING, PER_RESOLVER_CACHING, or OPERATION_LEVEL_CACHING. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.apiId">ApiId</a></code> | <code>string</code> | Unique AWS AppSync GraphQL API identifier. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.ttl">Ttl</a></code> | <code>double</code> | TTL in seconds for cache entries. Valid values are 1-3600. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.type">Type</a></code> | <code>string</code> | The cache instance type, such as SMALL, LARGE and LARGE_4X. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | At-rest encryption flag for cache. You cannot update this setting after creation. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.healthMetricsConfig">HealthMetricsConfig</a></code> | <code>string</code> | Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include NetworkBandwidthOutAllowanceExceeded and EngineCPUUtilization. |
| <code><a href="#@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Transit encryption flag when connecting to cache. You cannot update this setting after creation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiCachingBehavior`<sup>Required</sup> <a name="ApiCachingBehavior" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior"></a>

```csharp
public string ApiCachingBehavior { get; set; }
```

- *Type:* string

Caching behavior, such as FULL_REQUEST_CACHING, PER_RESOLVER_CACHING, or OPERATION_LEVEL_CACHING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Unique AWS AppSync GraphQL API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

TTL in seconds for cache entries. Valid values are 1-3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The cache instance type, such as SMALL, LARGE and LARGE_4X.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}

---

##### `AtRestEncryptionEnabled`<sup>Optional</sup> <a name="AtRestEncryptionEnabled" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled"></a>

```csharp
public bool|IResolvable AtRestEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

At-rest encryption flag for cache. You cannot update this setting after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}

---

##### `HealthMetricsConfig`<sup>Optional</sup> <a name="HealthMetricsConfig" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.healthMetricsConfig"></a>

```csharp
public string HealthMetricsConfig { get; set; }
```

- *Type:* string

Controls how cache health metrics will be emitted to CloudWatch. Cache health metrics include NetworkBandwidthOutAllowanceExceeded and EngineCPUUtilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#health_metrics_config AppsyncApiCache#health_metrics_config}

---

##### `TransitEncryptionEnabled`<sup>Optional</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled"></a>

```csharp
public bool|IResolvable TransitEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Transit encryption flag when connecting to cache. You cannot update this setting after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}

---



