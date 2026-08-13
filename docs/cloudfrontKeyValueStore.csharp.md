# `cloudfrontKeyValueStore` Submodule <a name="`cloudfrontKeyValueStore` Submodule" id="@cdktn/provider-awscc.cloudfrontKeyValueStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontKeyValueStore <a name="CloudfrontKeyValueStore" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store awscc_cloudfront_key_value_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStore(Construct Scope, string Id, CloudfrontKeyValueStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig">CloudfrontKeyValueStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig">CloudfrontKeyValueStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putImportSource">PutImportSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetImportSource">ResetImportSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImportSource` <a name="PutImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putImportSource"></a>

```csharp
private void PutImportSource(CloudfrontKeyValueStoreImportSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putImportSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudfrontKeyValueStoreTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetImportSource` <a name="ResetImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetImportSource"></a>

```csharp
private void ResetImportSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontKeyValueStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontKeyValueStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontKeyValueStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontKeyValueStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontKeyValueStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontKeyValueStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontKeyValueStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontKeyValueStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontKeyValueStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSource">ImportSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference">CloudfrontKeyValueStoreImportSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.keyValueStoreId">KeyValueStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList">CloudfrontKeyValueStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSourceInput">ImportSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportSource`<sup>Required</sup> <a name="ImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSource"></a>

```csharp
public CloudfrontKeyValueStoreImportSourceOutputReference ImportSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference">CloudfrontKeyValueStoreImportSourceOutputReference</a>

---

##### `KeyValueStoreId`<sup>Required</sup> <a name="KeyValueStoreId" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.keyValueStoreId"></a>

```csharp
public string KeyValueStoreId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tags"></a>

```csharp
public CloudfrontKeyValueStoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList">CloudfrontKeyValueStoreTagsList</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ImportSourceInput`<sup>Optional</sup> <a name="ImportSourceInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.importSourceInput"></a>

```csharp
public IResolvable|CloudfrontKeyValueStoreImportSource ImportSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tagsInput"></a>

```csharp
public IResolvable|CloudfrontKeyValueStoreTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontKeyValueStoreConfig <a name="CloudfrontKeyValueStoreConfig" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Comment = null,
    CloudfrontKeyValueStoreImportSource ImportSource = null,
    IResolvable|CloudfrontKeyValueStoreTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.name">Name</a></code> | <code>string</code> | The name of the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.comment">Comment</a></code> | <code>string</code> | A comment to describe the Key Value Store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.importSource">ImportSource</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | The import source for the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#name CloudfrontKeyValueStore#name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

A comment to describe the Key Value Store.

Omitting `Comment` from the template during updates will clear the existing comment (set to empty string). To preserve an existing comment, you must explicitly include it in the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#comment CloudfrontKeyValueStore#comment}

---

##### `ImportSource`<sup>Optional</sup> <a name="ImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.importSource"></a>

```csharp
public CloudfrontKeyValueStoreImportSource ImportSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

The import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#import_source CloudfrontKeyValueStore#import_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreConfig.property.tags"></a>

```csharp
public IResolvable|CloudfrontKeyValueStoreTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#tags CloudfrontKeyValueStore#tags}

---

### CloudfrontKeyValueStoreImportSource <a name="CloudfrontKeyValueStoreImportSource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStoreImportSource {
    string SourceArn = null,
    string SourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceArn">SourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the import source for the key value store. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceType">SourceType</a></code> | <code>string</code> | The source type of the import source for the key value store. |

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#source_arn CloudfrontKeyValueStore#source_arn}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

The source type of the import source for the key value store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_key_value_store#source_type CloudfrontKeyValueStore#source_type}

---

### CloudfrontKeyValueStoreTags <a name="CloudfrontKeyValueStoreTags" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStoreTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.key">Key</a></code> | <code>string</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.value">Value</a></code> | <code>string</code> | A string that contains an optional ``Tag`` value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontKeyValueStoreImportSourceOutputReference <a name="CloudfrontKeyValueStoreImportSourceOutputReference" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStoreImportSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceArn">ResetSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceArn"></a>

```csharp
private void ResetSourceArn()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.resetSourceType"></a>

```csharp
private void ResetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontKeyValueStoreImportSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreImportSource">CloudfrontKeyValueStoreImportSource</a>

---


### CloudfrontKeyValueStoreTagsList <a name="CloudfrontKeyValueStoreTagsList" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.get"></a>

```csharp
private CloudfrontKeyValueStoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontKeyValueStoreTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>[]

---


### CloudfrontKeyValueStoreTagsOutputReference <a name="CloudfrontKeyValueStoreTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontKeyValueStoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontKeyValueStoreTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontKeyValueStore.CloudfrontKeyValueStoreTags">CloudfrontKeyValueStoreTags</a>

---



