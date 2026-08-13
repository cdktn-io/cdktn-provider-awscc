# `glueSecurityConfiguration` Submodule <a name="`glueSecurityConfiguration` Submodule" id="@cdktn/provider-awscc.glueSecurityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSecurityConfiguration <a name="GlueSecurityConfiguration" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration awscc_glue_security_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfiguration(Construct Scope, string Id, GlueSecurityConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig">GlueSecurityConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig">GlueSecurityConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(GlueSecurityConfigurationEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueSecurityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSecurityConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSecurityConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSecurityConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GlueSecurityConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GlueSecurityConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueSecurityConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueSecurityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GlueSecurityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference">GlueSecurityConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfiguration"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference">GlueSecurityConfigurationEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSecurityConfigurationConfig <a name="GlueSecurityConfigurationConfig" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GlueSecurityConfigurationEncryptionConfiguration EncryptionConfiguration,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | The encryption configuration for the security configuration. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name for the security configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.encryptionConfiguration"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

The encryption configuration for the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#encryption_configuration GlueSecurityConfiguration#encryption_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#name GlueSecurityConfiguration#name}

---

### GlueSecurityConfigurationEncryptionConfiguration <a name="GlueSecurityConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfiguration {
    GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption CloudwatchEncryption = null,
    GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption JobBookmarksEncryption = null,
    IResolvable|GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] S3Encryptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.cloudwatchEncryption">CloudwatchEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | The encryption configuration for Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption">JobBookmarksEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | The encryption configuration for job bookmarks. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.s3Encryptions">S3Encryptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]</code> | The encryption configuration for Amazon Simple Storage Service (Amazon S3) data. |

---

##### `CloudwatchEncryption`<sup>Optional</sup> <a name="CloudwatchEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.cloudwatchEncryption"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption CloudwatchEncryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

The encryption configuration for Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}

---

##### `JobBookmarksEncryption`<sup>Optional</sup> <a name="JobBookmarksEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.jobBookmarksEncryption"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption JobBookmarksEncryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

The encryption configuration for job bookmarks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}

---

##### `S3Encryptions`<sup>Optional</sup> <a name="S3Encryptions" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration.property.s3Encryptions"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] S3Encryptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]

The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#s3_encryptions GlueSecurityConfiguration#s3_encryptions}

---

### GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption <a name="GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
    string CloudwatchEncryptionMode = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.cloudwatchEncryptionMode">CloudwatchEncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |

---

##### `CloudwatchEncryptionMode`<sup>Optional</sup> <a name="CloudwatchEncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.cloudwatchEncryptionMode"></a>

```csharp
public string CloudwatchEncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

### GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption <a name="GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    string JobBookmarksEncryptionMode = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode">JobBookmarksEncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |

---

##### `JobBookmarksEncryptionMode`<sup>Optional</sup> <a name="JobBookmarksEncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.jobBookmarksEncryptionMode"></a>

```csharp
public string JobBookmarksEncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

### GlueSecurityConfigurationEncryptionConfigurationS3Encryptions <a name="GlueSecurityConfigurationEncryptionConfigurationS3Encryptions" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationS3Encryptions {
    string KmsKeyArn = null,
    string S3EncryptionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions.property.s3EncryptionMode">S3EncryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#kms_key_arn GlueSecurityConfiguration#kms_key_arn}.

---

##### `S3EncryptionMode`<sup>Optional</sup> <a name="S3EncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions.property.s3EncryptionMode"></a>

```csharp
public string S3EncryptionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_security_configuration#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetCloudwatchEncryptionMode">ResetCloudwatchEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchEncryptionMode` <a name="ResetCloudwatchEncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetCloudwatchEncryptionMode"></a>

```csharp
private void ResetCloudwatchEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionModeInput">CloudwatchEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode">CloudwatchEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchEncryptionModeInput`<sup>Optional</sup> <a name="CloudwatchEncryptionModeInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionModeInput"></a>

```csharp
public string CloudwatchEncryptionModeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `CloudwatchEncryptionMode`<sup>Required</sup> <a name="CloudwatchEncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.cloudwatchEncryptionMode"></a>

```csharp
public string CloudwatchEncryptionMode { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---


### GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetJobBookmarksEncryptionMode">ResetJobBookmarksEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJobBookmarksEncryptionMode` <a name="ResetJobBookmarksEncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetJobBookmarksEncryptionMode"></a>

```csharp
private void ResetJobBookmarksEncryptionMode()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionModeInput">JobBookmarksEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode">JobBookmarksEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobBookmarksEncryptionModeInput`<sup>Optional</sup> <a name="JobBookmarksEncryptionModeInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionModeInput"></a>

```csharp
public string JobBookmarksEncryptionModeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `JobBookmarksEncryptionMode`<sup>Required</sup> <a name="JobBookmarksEncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.jobBookmarksEncryptionMode"></a>

```csharp
public string JobBookmarksEncryptionMode { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---


### GlueSecurityConfigurationEncryptionConfigurationOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption">PutCloudwatchEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption">PutJobBookmarksEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryptions">PutS3Encryptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resetCloudwatchEncryption">ResetCloudwatchEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resetJobBookmarksEncryption">ResetJobBookmarksEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resetS3Encryptions">ResetS3Encryptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchEncryption` <a name="PutCloudwatchEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption"></a>

```csharp
private void PutCloudwatchEncryption(GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putCloudwatchEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---

##### `PutJobBookmarksEncryption` <a name="PutJobBookmarksEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption"></a>

```csharp
private void PutJobBookmarksEncryption(GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putJobBookmarksEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---

##### `PutS3Encryptions` <a name="PutS3Encryptions" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryptions"></a>

```csharp
private void PutS3Encryptions(IResolvable|GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.putS3Encryptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]

---

##### `ResetCloudwatchEncryption` <a name="ResetCloudwatchEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resetCloudwatchEncryption"></a>

```csharp
private void ResetCloudwatchEncryption()
```

##### `ResetJobBookmarksEncryption` <a name="ResetJobBookmarksEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resetJobBookmarksEncryption"></a>

```csharp
private void ResetJobBookmarksEncryption()
```

##### `ResetS3Encryptions` <a name="ResetS3Encryptions" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.resetS3Encryptions"></a>

```csharp
private void ResetS3Encryptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption">CloudwatchEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption">JobBookmarksEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions">S3Encryptions</a></code> | <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryptionInput">CloudwatchEncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryptionInput">JobBookmarksEncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3EncryptionsInput">S3EncryptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchEncryption`<sup>Required</sup> <a name="CloudwatchEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryption"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference CloudwatchEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference</a>

---

##### `JobBookmarksEncryption`<sup>Required</sup> <a name="JobBookmarksEncryption" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryption"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference JobBookmarksEncryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference</a>

---

##### `S3Encryptions`<sup>Required</sup> <a name="S3Encryptions" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3Encryptions"></a>

```csharp
public GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList S3Encryptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList">GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList</a>

---

##### `CloudwatchEncryptionInput`<sup>Optional</sup> <a name="CloudwatchEncryptionInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.cloudwatchEncryptionInput"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption CloudwatchEncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption">GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption</a>

---

##### `JobBookmarksEncryptionInput`<sup>Optional</sup> <a name="JobBookmarksEncryptionInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.jobBookmarksEncryptionInput"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption JobBookmarksEncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption">GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption</a>

---

##### `S3EncryptionsInput`<sup>Optional</sup> <a name="S3EncryptionsInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.s3EncryptionsInput"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] S3EncryptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfiguration">GlueSecurityConfigurationEncryptionConfiguration</a>

---


### GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList <a name="GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get"></a>

```csharp
private GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsList.property.internalValue"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationS3Encryptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>[]

---


### GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference <a name="GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resetS3EncryptionMode">ResetS3EncryptionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetS3EncryptionMode` <a name="ResetS3EncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.resetS3EncryptionMode"></a>

```csharp
private void ResetS3EncryptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionModeInput">S3EncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode">S3EncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `S3EncryptionModeInput`<sup>Optional</sup> <a name="S3EncryptionModeInput" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionModeInput"></a>

```csharp
public string S3EncryptionModeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `S3EncryptionMode`<sup>Required</sup> <a name="S3EncryptionMode" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.s3EncryptionMode"></a>

```csharp
public string S3EncryptionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3EncryptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GlueSecurityConfigurationEncryptionConfigurationS3Encryptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSecurityConfiguration.GlueSecurityConfigurationEncryptionConfigurationS3Encryptions">GlueSecurityConfigurationEncryptionConfigurationS3Encryptions</a>

---



