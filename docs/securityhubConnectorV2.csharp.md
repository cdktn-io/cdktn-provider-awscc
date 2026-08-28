# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-awscc.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2 awscc_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2(Construct Scope, string Id, SecurityhubConnectorV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName">PutProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderName` <a name="PutProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName"></a>

```csharp
private void PutProviderName(SecurityhubConnectorV2ProviderName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.putProviderName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubConnectorV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubConnectorV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubConnectorV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubConnectorV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorStatus">ConnectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatus">EnablementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatusReason">EnablementStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.issues">Issues</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList">SecurityhubConnectorV2IssuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastCheckedAt">LastCheckedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerName">ProviderName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference">SecurityhubConnectorV2ProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerNameInput">ProviderNameInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorStatus"></a>

```csharp
public string ConnectorStatus { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EnablementStatus`<sup>Required</sup> <a name="EnablementStatus" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatus"></a>

```csharp
public string EnablementStatus { get; }
```

- *Type:* string

---

##### `EnablementStatusReason`<sup>Required</sup> <a name="EnablementStatusReason" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.enablementStatusReason"></a>

```csharp
public string EnablementStatusReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.issues"></a>

```csharp
public SecurityhubConnectorV2IssuesList Issues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList">SecurityhubConnectorV2IssuesList</a>

---

##### `LastCheckedAt`<sup>Required</sup> <a name="LastCheckedAt" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastCheckedAt"></a>

```csharp
public string LastCheckedAt { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerName"></a>

```csharp
public SecurityhubConnectorV2ProviderNameOutputReference ProviderName { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference">SecurityhubConnectorV2ProviderNameOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.providerNameInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderName ProviderNameInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    SecurityhubConnectorV2ProviderName ProviderName,
    string Description = null,
    string KmsKeyArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">Name</a></code> | <code>string</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.providerName">ProviderName</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | The third-party provider configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">Description</a></code> | <code>string</code> | A description of the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of KMS key used for the connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.providerName"></a>

```csharp
public SecurityhubConnectorV2ProviderName ProviderName { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

The third-party provider configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#provider_name SecurityhubConnectorV2#provider_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of KMS key used for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}

---

### SecurityhubConnectorV2Issues <a name="SecurityhubConnectorV2Issues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2Issues {

};
```


### SecurityhubConnectorV2ProviderName <a name="SecurityhubConnectorV2ProviderName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderName {
    SecurityhubConnectorV2ProviderNameAzure Azure = null,
    SecurityhubConnectorV2ProviderNameJiraCloud JiraCloud = null,
    SecurityhubConnectorV2ProviderNameServiceNow ServiceNow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | The configuration settings required to establish an integration between AWS Security Hub and Azure. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.jiraCloud">JiraCloud</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | The initial configuration settings required to establish an integration between Security Hub and Jira Cloud. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM. |

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.azure"></a>

```csharp
public SecurityhubConnectorV2ProviderNameAzure Azure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

The configuration settings required to establish an integration between AWS Security Hub and Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure SecurityhubConnectorV2#azure}

---

##### `JiraCloud`<sup>Optional</sup> <a name="JiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.jiraCloud"></a>

```csharp
public SecurityhubConnectorV2ProviderNameJiraCloud JiraCloud { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

The initial configuration settings required to establish an integration between Security Hub and Jira Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName.property.serviceNow"></a>

```csharp
public SecurityhubConnectorV2ProviderNameServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ProviderNameAzure <a name="SecurityhubConnectorV2ProviderNameAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameAzure {
    string AwsConfigConnectorArn = null,
    string[] AzureRegions = null,
    SecurityhubConnectorV2ProviderNameAzureScopeConfiguration ScopeConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.awsConfigConnectorArn">AwsConfigConnectorArn</a></code> | <code>string</code> | The ARN of the AWS Config connector used for the Azure integration. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.azureRegions">AzureRegions</a></code> | <code>string[]</code> | The list of Azure regions to include in the connector scope. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | The scope configuration for an Azure connector. |

---

##### `AwsConfigConnectorArn`<sup>Optional</sup> <a name="AwsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.awsConfigConnectorArn"></a>

```csharp
public string AwsConfigConnectorArn { get; set; }
```

- *Type:* string

The ARN of the AWS Config connector used for the Azure integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#aws_config_connector_arn SecurityhubConnectorV2#aws_config_connector_arn}

---

##### `AzureRegions`<sup>Optional</sup> <a name="AzureRegions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.azureRegions"></a>

```csharp
public string[] AzureRegions { get; set; }
```

- *Type:* string[]

The list of Azure regions to include in the connector scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#azure_regions SecurityhubConnectorV2#azure_regions}

---

##### `ScopeConfiguration`<sup>Optional</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure.property.scopeConfiguration"></a>

```csharp
public SecurityhubConnectorV2ProviderNameAzureScopeConfiguration ScopeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

The scope configuration for an Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_configuration SecurityhubConnectorV2#scope_configuration}

---

### SecurityhubConnectorV2ProviderNameAzureScopeConfiguration <a name="SecurityhubConnectorV2ProviderNameAzureScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameAzureScopeConfiguration {
    string ScopeType = null,
    string[] ScopeValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeType">ScopeType</a></code> | <code>string</code> | The scope type for the Azure connector. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeValues">ScopeValues</a></code> | <code>string[]</code> | The list of scope values for the Azure connector. |

---

##### `ScopeType`<sup>Optional</sup> <a name="ScopeType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeType"></a>

```csharp
public string ScopeType { get; set; }
```

- *Type:* string

The scope type for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_type SecurityhubConnectorV2#scope_type}

---

##### `ScopeValues`<sup>Optional</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration.property.scopeValues"></a>

```csharp
public string[] ScopeValues { get; set; }
```

- *Type:* string[]

The list of scope values for the Azure connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#scope_values SecurityhubConnectorV2#scope_values}

---

### SecurityhubConnectorV2ProviderNameJiraCloud <a name="SecurityhubConnectorV2ProviderNameJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameJiraCloud {
    string ProjectKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.property.projectKey">ProjectKey</a></code> | <code>string</code> | The project key for a Jira Cloud instance. |

---

##### `ProjectKey`<sup>Optional</sup> <a name="ProjectKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The project key for a Jira Cloud instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}

---

### SecurityhubConnectorV2ProviderNameServiceNow <a name="SecurityhubConnectorV2ProviderNameServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameServiceNow {
    string InstanceName = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.instanceName">InstanceName</a></code> | <code>string</code> | The instance name of ServiceNow ITSM. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.secretArn">SecretArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials. |

---

##### `InstanceName`<sup>Optional</sup> <a name="InstanceName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

The instance name of ServiceNow ITSM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the ServiceNow credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2IssuesList <a name="SecurityhubConnectorV2IssuesList" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2IssuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get"></a>

```csharp
private SecurityhubConnectorV2IssuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecurityhubConnectorV2IssuesOutputReference <a name="SecurityhubConnectorV2IssuesOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2IssuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues">SecurityhubConnectorV2Issues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2IssuesOutputReference.property.internalValue"></a>

```csharp
public SecurityhubConnectorV2Issues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2Issues">SecurityhubConnectorV2Issues</a>

---


### SecurityhubConnectorV2ProviderNameAzureOutputReference <a name="SecurityhubConnectorV2ProviderNameAzureOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration">PutScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAwsConfigConnectorArn">ResetAwsConfigConnectorArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAzureRegions">ResetAzureRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetScopeConfiguration">ResetScopeConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScopeConfiguration` <a name="PutScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration"></a>

```csharp
private void PutScopeConfiguration(SecurityhubConnectorV2ProviderNameAzureScopeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.putScopeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---

##### `ResetAwsConfigConnectorArn` <a name="ResetAwsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAwsConfigConnectorArn"></a>

```csharp
private void ResetAwsConfigConnectorArn()
```

##### `ResetAzureRegions` <a name="ResetAzureRegions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetAzureRegions"></a>

```csharp
private void ResetAzureRegions()
```

##### `ResetScopeConfiguration` <a name="ResetScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.resetScopeConfiguration"></a>

```csharp
private void ResetScopeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArnInput">AwsConfigConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegionsInput">AzureRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfigurationInput">ScopeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn">AwsConfigConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions">AzureRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration"></a>

```csharp
public SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference ScopeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a>

---

##### `AwsConfigConnectorArnInput`<sup>Optional</sup> <a name="AwsConfigConnectorArnInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArnInput"></a>

```csharp
public string AwsConfigConnectorArnInput { get; }
```

- *Type:* string

---

##### `AzureRegionsInput`<sup>Optional</sup> <a name="AzureRegionsInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegionsInput"></a>

```csharp
public string[] AzureRegionsInput { get; }
```

- *Type:* string[]

---

##### `ScopeConfigurationInput`<sup>Optional</sup> <a name="ScopeConfigurationInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfigurationInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameAzureScopeConfiguration ScopeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---

##### `AwsConfigConnectorArn`<sup>Required</sup> <a name="AwsConfigConnectorArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn"></a>

```csharp
public string AwsConfigConnectorArn { get; }
```

- *Type:* string

---

##### `AzureRegions`<sup>Required</sup> <a name="AzureRegions" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions"></a>

```csharp
public string[] AzureRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameAzure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

---


### SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference <a name="SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeType">ResetScopeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeValues">ResetScopeValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScopeType` <a name="ResetScopeType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeType"></a>

```csharp
private void ResetScopeType()
```

##### `ResetScopeValues` <a name="ResetScopeValues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resetScopeValues"></a>

```csharp
private void ResetScopeValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput">ScopeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput">ScopeValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType">ScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues">ScopeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeTypeInput`<sup>Optional</sup> <a name="ScopeTypeInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeTypeInput"></a>

```csharp
public string ScopeTypeInput { get; }
```

- *Type:* string

---

##### `ScopeValuesInput`<sup>Optional</sup> <a name="ScopeValuesInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValuesInput"></a>

```csharp
public string[] ScopeValuesInput { get; }
```

- *Type:* string[]

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType"></a>

```csharp
public string ScopeType { get; }
```

- *Type:* string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues"></a>

```csharp
public string[] ScopeValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameAzureScopeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureScopeConfiguration">SecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---


### SecurityhubConnectorV2ProviderNameJiraCloudOutputReference <a name="SecurityhubConnectorV2ProviderNameJiraCloudOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameJiraCloudOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resetProjectKey">ResetProjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectKey` <a name="ResetProjectKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resetProjectKey"></a>

```csharp
private void ResetProjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameJiraCloud InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

---


### SecurityhubConnectorV2ProviderNameOutputReference <a name="SecurityhubConnectorV2ProviderNameOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud">PutJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetJiraCloud">ResetJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure"></a>

```csharp
private void PutAzure(SecurityhubConnectorV2ProviderNameAzure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

---

##### `PutJiraCloud` <a name="PutJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud"></a>

```csharp
private void PutJiraCloud(SecurityhubConnectorV2ProviderNameJiraCloud Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(SecurityhubConnectorV2ProviderNameServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

---

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetJiraCloud` <a name="ResetJiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetJiraCloud"></a>

```csharp
private void ResetJiraCloud()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference">SecurityhubConnectorV2ProviderNameAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud">JiraCloud</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference">SecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference">SecurityhubConnectorV2ProviderNameServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azureInput">AzureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloudInput">JiraCloudInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azure"></a>

```csharp
public SecurityhubConnectorV2ProviderNameAzureOutputReference Azure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzureOutputReference">SecurityhubConnectorV2ProviderNameAzureOutputReference</a>

---

##### `JiraCloud`<sup>Required</sup> <a name="JiraCloud" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud"></a>

```csharp
public SecurityhubConnectorV2ProviderNameJiraCloudOutputReference JiraCloud { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloudOutputReference">SecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow"></a>

```csharp
public SecurityhubConnectorV2ProviderNameServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference">SecurityhubConnectorV2ProviderNameServiceNowOutputReference</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.azureInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameAzure AzureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameAzure">SecurityhubConnectorV2ProviderNameAzure</a>

---

##### `JiraCloudInput`<sup>Optional</sup> <a name="JiraCloudInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloudInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameJiraCloud JiraCloudInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameJiraCloud">SecurityhubConnectorV2ProviderNameJiraCloud</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderName InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderName">SecurityhubConnectorV2ProviderName</a>

---


### SecurityhubConnectorV2ProviderNameServiceNowOutputReference <a name="SecurityhubConnectorV2ProviderNameServiceNowOutputReference" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubConnectorV2ProviderNameServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetInstanceName">ResetInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceName` <a name="ResetInstanceName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetInstanceName"></a>

```csharp
private void ResetInstanceName()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubConnectorV2ProviderNameServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubConnectorV2.SecurityhubConnectorV2ProviderNameServiceNow">SecurityhubConnectorV2ProviderNameServiceNow</a>

---



