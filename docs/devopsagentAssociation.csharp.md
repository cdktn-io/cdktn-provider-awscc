# `devopsagentAssociation` Submodule <a name="`devopsagentAssociation` Submodule" id="@cdktn/provider-awscc.devopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssociation <a name="DevopsagentAssociation" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociation(Construct Scope, string Id, DevopsagentAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig">DevopsagentAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig">DevopsagentAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds">ResetLinkedAssociationIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration"></a>

```csharp
private void PutConfiguration(DevopsagentAssociationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `ResetLinkedAssociationIds` <a name="ResetLinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds"></a>

```csharp
private void ResetLinkedAssociationIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DevopsagentAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput">AgentSpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput">LinkedAssociationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds">LinkedAssociationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration"></a>

```csharp
public DevopsagentAssociationConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AgentSpaceIdInput`<sup>Optional</sup> <a name="AgentSpaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput"></a>

```csharp
public string AgentSpaceIdInput { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `LinkedAssociationIdsInput`<sup>Optional</sup> <a name="LinkedAssociationIdsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput"></a>

```csharp
public string[] LinkedAssociationIdsInput { get; }
```

- *Type:* string[]

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; }
```

- *Type:* string

---

##### `LinkedAssociationIds`<sup>Required</sup> <a name="LinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds"></a>

```csharp
public string[] LinkedAssociationIds { get; }
```

- *Type:* string[]

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssociationConfig <a name="DevopsagentAssociationConfig" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentSpaceId,
    DevopsagentAssociationConfiguration Configuration,
    string ServiceId,
    string[] LinkedAssociationIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds">LinkedAssociationIds</a></code> | <code>string[]</code> | Set of linked association IDs for parent-child relationships. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; set; }
```

- *Type:* string

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration"></a>

```csharp
public DevopsagentAssociationConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `LinkedAssociationIds`<sup>Optional</sup> <a name="LinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds"></a>

```csharp
public string[] LinkedAssociationIds { get; set; }
```

- *Type:* string[]

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

### DevopsagentAssociationConfiguration <a name="DevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfiguration {
    DevopsagentAssociationConfigurationAws Aws = null,
    DevopsagentAssociationConfigurationAzure Azure = null,
    DevopsagentAssociationConfigurationDynatrace Dynatrace = null,
    DevopsagentAssociationConfigurationEventChannel EventChannel = null,
    DevopsagentAssociationConfigurationGitHub GitHub = null,
    DevopsagentAssociationConfigurationGitLab GitLab = null,
    DevopsagentAssociationConfigurationMcpServer McpServer = null,
    DevopsagentAssociationConfigurationMcpServerDatadog McpServerDatadog = null,
    DevopsagentAssociationConfigurationMcpServerGrafana McpServerGrafana = null,
    DevopsagentAssociationConfigurationMcpServerNewRelic McpServerNewRelic = null,
    DevopsagentAssociationConfigurationMcpServerSigV4 McpServerSigV4 = null,
    DevopsagentAssociationConfigurationMcpServerSplunk McpServerSplunk = null,
    DevopsagentAssociationConfigurationPagerDuty PagerDuty = null,
    DevopsagentAssociationConfigurationServiceNow ServiceNow = null,
    DevopsagentAssociationConfigurationSlack Slack = null,
    DevopsagentAssociationConfigurationSourceAws SourceAws = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | AWS association for 'monitor' account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | Azure subscription integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | Dynatrace monitoring configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel">EventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | EventChannelconfiguration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub">GitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | GitHub repository integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | GitLab project integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog">McpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | Datadog MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | NewRelic MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | PagerDuty integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | ServiceNow integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | Slack workspace integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws">SourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | AWS association for 'source' account. |

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws"></a>

```csharp
public DevopsagentAssociationConfigurationAws Aws { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

AWS association for 'monitor' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure"></a>

```csharp
public DevopsagentAssociationConfigurationAzure Azure { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

Azure subscription integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}

---

##### `Dynatrace`<sup>Optional</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace"></a>

```csharp
public DevopsagentAssociationConfigurationDynatrace Dynatrace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

Dynatrace monitoring configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}

---

##### `EventChannel`<sup>Optional</sup> <a name="EventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel"></a>

```csharp
public DevopsagentAssociationConfigurationEventChannel EventChannel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

EventChannelconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}

---

##### `GitHub`<sup>Optional</sup> <a name="GitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub"></a>

```csharp
public DevopsagentAssociationConfigurationGitHub GitHub { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

GitHub repository integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}

---

##### `GitLab`<sup>Optional</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab"></a>

```csharp
public DevopsagentAssociationConfigurationGitLab GitLab { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

GitLab project integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}

---

##### `McpServer`<sup>Optional</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServer McpServer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}

---

##### `McpServerDatadog`<sup>Optional</sup> <a name="McpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerDatadog McpServerDatadog { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

Datadog MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}

---

##### `McpServerGrafana`<sup>Optional</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerGrafana McpServerGrafana { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}

---

##### `McpServerNewRelic`<sup>Optional</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerNewRelic McpServerNewRelic { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

NewRelic MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}

---

##### `McpServerSigV4`<sup>Optional</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerSigV4 McpServerSigV4 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}

---

##### `McpServerSplunk`<sup>Optional</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerSplunk McpServerSplunk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}

---

##### `PagerDuty`<sup>Optional</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty"></a>

```csharp
public DevopsagentAssociationConfigurationPagerDuty PagerDuty { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

PagerDuty integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow"></a>

```csharp
public DevopsagentAssociationConfigurationServiceNow ServiceNow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

ServiceNow integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack"></a>

```csharp
public DevopsagentAssociationConfigurationSlack Slack { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

Slack workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}

---

##### `SourceAws`<sup>Optional</sup> <a name="SourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws"></a>

```csharp
public DevopsagentAssociationConfigurationSourceAws SourceAws { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

AWS association for 'source' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}

---

### DevopsagentAssociationConfigurationAws <a name="DevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAws {
    string AccountId = null,
    string AccountType = null,
    string AssumableRoleArn = null,
    IResolvable|DevopsagentAssociationConfigurationAwsResources[] Resources = null,
    IResolvable|DevopsagentAssociationConfigurationAwsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId">AccountId</a></code> | <code>string</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType">AccountType</a></code> | <code>string</code> | Account Type 'monitor' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>string</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]</code> | List of AWS tags as key-value pairs. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `AccountType`<sup>Optional</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType"></a>

```csharp
public string AccountType { get; set; }
```

- *Type:* string

Account Type 'monitor' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `AssumableRoleArn`<sup>Optional</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn"></a>

```csharp
public string AssumableRoleArn { get; set; }
```

- *Type:* string

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationAwsResources <a name="DevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsResources {
    string ResourceArn = null,
    string ResourceMetadata = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata">ResourceMetadata</a></code> | <code>string</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType">ResourceType</a></code> | <code>string</code> | Resource type. |

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `ResourceMetadata`<sup>Optional</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata"></a>

```csharp
public string ResourceMetadata { get; set; }
```

- *Type:* string

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationAwsTags <a name="DevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

### DevopsagentAssociationConfigurationAzure <a name="DevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAzure {
    string SubscriptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Azure subscription ID corresponding to provided resources. |

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Azure subscription ID corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}

---

### DevopsagentAssociationConfigurationDynatrace <a name="DevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationDynatrace {
    bool|IResolvable EnableWebhookUpdates = null,
    string EnvId = null,
    string[] Resources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId">EnvId</a></code> | <code>string</code> | Dynatrace environment id. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources">Resources</a></code> | <code>string[]</code> | List of Dynatrace resources to monitor. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `EnvId`<sup>Optional</sup> <a name="EnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

Dynatrace environment id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

List of Dynatrace resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

### DevopsagentAssociationConfigurationEventChannel <a name="DevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationEventChannel {
    bool|IResolvable EnableWebhookUpdates = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

### DevopsagentAssociationConfigurationGitHub <a name="DevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationGitHub {
    string Owner = null,
    string OwnerType = null,
    string RepoId = null,
    string RepoName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner">Owner</a></code> | <code>string</code> | Repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType">OwnerType</a></code> | <code>string</code> | Type of repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId">RepoId</a></code> | <code>string</code> | Associated Github repo ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName">RepoName</a></code> | <code>string</code> | Associated Github repo name. |

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}

---

##### `OwnerType`<sup>Optional</sup> <a name="OwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType"></a>

```csharp
public string OwnerType { get; set; }
```

- *Type:* string

Type of repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}

---

##### `RepoId`<sup>Optional</sup> <a name="RepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId"></a>

```csharp
public string RepoId { get; set; }
```

- *Type:* string

Associated Github repo ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName"></a>

```csharp
public string RepoName { get; set; }
```

- *Type:* string

Associated Github repo name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}

---

### DevopsagentAssociationConfigurationGitLab <a name="DevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationGitLab {
    bool|IResolvable EnableWebhookUpdates = null,
    string InstanceIdentifier = null,
    string ProjectId = null,
    string ProjectPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier">InstanceIdentifier</a></code> | <code>string</code> | GitLab instance identifier. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId">ProjectId</a></code> | <code>string</code> | GitLab numeric project ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath">ProjectPath</a></code> | <code>string</code> | Full GitLab project path (e.g., namespace/project-name). |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `InstanceIdentifier`<sup>Optional</sup> <a name="InstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier"></a>

```csharp
public string InstanceIdentifier { get; set; }
```

- *Type:* string

GitLab instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

GitLab numeric project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}

---

##### `ProjectPath`<sup>Optional</sup> <a name="ProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath"></a>

```csharp
public string ProjectPath { get; set; }
```

- *Type:* string

Full GitLab project path (e.g., namespace/project-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}

---

### DevopsagentAssociationConfigurationMcpServer <a name="DevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServer {
    string Description = null,
    bool|IResolvable EnableWebhookUpdates = null,
    string Endpoint = null,
    string Name = null,
    string[] Tools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description">Description</a></code> | <code>string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint">Endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name">Name</a></code> | <code>string</code> | The name of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools">Tools</a></code> | <code>string[]</code> | List of MCP tools that can be used with the association. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools"></a>

```csharp
public string[] Tools { get; set; }
```

- *Type:* string[]

List of MCP tools that can be used with the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerDatadog <a name="DevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerDatadog {
    string Description = null,
    bool|IResolvable EnableWebhookUpdates = null,
    string Endpoint = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description">Description</a></code> | <code>string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint">Endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name">Name</a></code> | <code>string</code> | The name of the MCP server. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationMcpServerGrafana <a name="DevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerGrafana {
    bool|IResolvable EnableWebhookUpdates = null,
    string Endpoint = null,
    string[] Tools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint">Endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools">Tools</a></code> | <code>string[]</code> | List of tool categories to enable for the Grafana MCP server. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools"></a>

```csharp
public string[] Tools { get; set; }
```

- *Type:* string[]

List of tool categories to enable for the Grafana MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerNewRelic <a name="DevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerNewRelic {
    string AccountId = null,
    string Endpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId">AccountId</a></code> | <code>string</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint">Endpoint</a></code> | <code>string</code> | MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/). |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

### DevopsagentAssociationConfigurationMcpServerSigV4 <a name="DevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerSigV4 {
    string[] Tools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools">Tools</a></code> | <code>string[]</code> | List of MCP tools available for the association. |

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools"></a>

```csharp
public string[] Tools { get; set; }
```

- *Type:* string[]

List of MCP tools available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerSplunk <a name="DevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerSplunk {
    string Description = null,
    bool|IResolvable EnableWebhookUpdates = null,
    string Endpoint = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description">Description</a></code> | <code>string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint">Endpoint</a></code> | <code>string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name">Name</a></code> | <code>string</code> | The name of the MCP server. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationPagerDuty <a name="DevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationPagerDuty {
    string CustomerEmail = null,
    bool|IResolvable EnableWebhookUpdates = null,
    string[] Services = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail">CustomerEmail</a></code> | <code>string</code> | Email to be used in PagerDuty API header. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services">Services</a></code> | <code>string[]</code> | List of PagerDuty service IDs available for the association. |

---

##### `CustomerEmail`<sup>Optional</sup> <a name="CustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail"></a>

```csharp
public string CustomerEmail { get; set; }
```

- *Type:* string

Email to be used in PagerDuty API header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

List of PagerDuty service IDs available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}

---

### DevopsagentAssociationConfigurationServiceNow <a name="DevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationServiceNow {
    bool|IResolvable EnableWebhookUpdates = null,
    string InstanceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId">InstanceId</a></code> | <code>string</code> | ServiceNow instance ID. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

ServiceNow instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}

---

### DevopsagentAssociationConfigurationSlack <a name="DevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSlack {
    DevopsagentAssociationConfigurationSlackTransmissionTarget TransmissionTarget = null,
    string WorkspaceId = null,
    string WorkspaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget">TransmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | Transmission targets for agent notifications. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Associated Slack workspace ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName">WorkspaceName</a></code> | <code>string</code> | Associated Slack workspace name. |

---

##### `TransmissionTarget`<sup>Optional</sup> <a name="TransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget"></a>

```csharp
public DevopsagentAssociationConfigurationSlackTransmissionTarget TransmissionTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

Transmission targets for agent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Associated Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}

---

##### `WorkspaceName`<sup>Optional</sup> <a name="WorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName"></a>

```csharp
public string WorkspaceName { get; set; }
```

- *Type:* string

Associated Slack workspace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}

---

### DevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSlackTransmissionTarget {
    DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget IncidentResponseTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget">IncidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | Destination for IncidentResponse agent. |

---

##### `IncidentResponseTarget`<sup>Optional</sup> <a name="IncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget"></a>

```csharp
public DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget IncidentResponseTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

Destination for IncidentResponse agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}

---

### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget {
    string ChannelId = null,
    string ChannelName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId">ChannelId</a></code> | <code>string</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName">ChannelName</a></code> | <code>string</code> | Slack channel name. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}

---

### DevopsagentAssociationConfigurationSourceAws <a name="DevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAws {
    string AccountId = null,
    string AccountType = null,
    string AssumableRoleArn = null,
    IResolvable|DevopsagentAssociationConfigurationSourceAwsResources[] Resources = null,
    IResolvable|DevopsagentAssociationConfigurationSourceAwsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId">AccountId</a></code> | <code>string</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType">AccountType</a></code> | <code>string</code> | Account Type 'source' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>string</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources">Resources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]</code> | List of AWS tags as key-value pairs. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `AccountType`<sup>Optional</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType"></a>

```csharp
public string AccountType { get; set; }
```

- *Type:* string

Account Type 'source' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `AssumableRoleArn`<sup>Optional</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn"></a>

```csharp
public string AssumableRoleArn { get; set; }
```

- *Type:* string

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsResources[] Resources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationSourceAwsResources <a name="DevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsResources {
    string ResourceArn = null,
    string ResourceMetadata = null,
    string ResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn">ResourceArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata">ResourceMetadata</a></code> | <code>string</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType">ResourceType</a></code> | <code>string</code> | Resource type. |

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn"></a>

```csharp
public string ResourceArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `ResourceMetadata`<sup>Optional</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata"></a>

```csharp
public string ResourceMetadata { get; set; }
```

- *Type:* string

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationSourceAwsTags <a name="DevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssociationConfigurationAwsOutputReference <a name="DevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType">ResetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn">ResetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources"></a>

```csharp
private void PutResources(IResolvable|DevopsagentAssociationConfigurationAwsResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|DevopsagentAssociationConfigurationAwsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAccountType` <a name="ResetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType"></a>

```csharp
private void ResetAccountType()
```

##### `ResetAssumableRoleArn` <a name="ResetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn"></a>

```csharp
private void ResetAssumableRoleArn()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput">AccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput">AssumableRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType">AccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```csharp
public DevopsagentAssociationConfigurationAwsResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```csharp
public DevopsagentAssociationConfigurationAwsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountTypeInput`<sup>Optional</sup> <a name="AccountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput"></a>

```csharp
public string AccountTypeInput { get; }
```

- *Type:* string

---

##### `AssumableRoleArnInput`<sup>Optional</sup> <a name="AssumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput"></a>

```csharp
public string AssumableRoleArnInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```csharp
public string AccountType { get; }
```

- *Type:* string

---

##### `AssumableRoleArn`<sup>Required</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```csharp
public string AssumableRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAws InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---


### DevopsagentAssociationConfigurationAwsResourcesList <a name="DevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```csharp
private DevopsagentAssociationConfigurationAwsResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>[]

---


### DevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata">ResetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetResourceMetadata` <a name="ResetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata"></a>

```csharp
private void ResetResourceMetadata()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput">ResourceMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">ResourceMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `ResourceMetadataInput`<sup>Optional</sup> <a name="ResourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```csharp
public string ResourceMetadataInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `ResourceMetadata`<sup>Required</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```csharp
public string ResourceMetadata { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources">DevopsagentAssociationConfigurationAwsResources</a>

---


### DevopsagentAssociationConfigurationAwsTagsList <a name="DevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get"></a>

```csharp
private DevopsagentAssociationConfigurationAwsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>[]

---


### DevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAwsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAwsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags">DevopsagentAssociationConfigurationAwsTags</a>

---


### DevopsagentAssociationConfigurationAzureOutputReference <a name="DevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAzure InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---


### DevopsagentAssociationConfigurationDynatraceOutputReference <a name="DevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationDynatraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId">ResetEnvId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetEnvId` <a name="ResetEnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId"></a>

```csharp
private void ResetEnvId()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationDynatrace InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---


### DevopsagentAssociationConfigurationEventChannelOutputReference <a name="DevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationEventChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationEventChannel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---


### DevopsagentAssociationConfigurationGitHubOutputReference <a name="DevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationGitHubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType">ResetOwnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId">ResetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetOwnerType` <a name="ResetOwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType"></a>

```csharp
private void ResetOwnerType()
```

##### `ResetRepoId` <a name="ResetRepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId"></a>

```csharp
private void ResetRepoId()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName"></a>

```csharp
private void ResetRepoName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput">OwnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput">RepoIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">OwnerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">RepoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `OwnerTypeInput`<sup>Optional</sup> <a name="OwnerTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput"></a>

```csharp
public string OwnerTypeInput { get; }
```

- *Type:* string

---

##### `RepoIdInput`<sup>Optional</sup> <a name="RepoIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput"></a>

```csharp
public string RepoIdInput { get; }
```

- *Type:* string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput"></a>

```csharp
public string RepoNameInput { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```csharp
public string OwnerType { get; }
```

- *Type:* string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```csharp
public string RepoId { get; }
```

- *Type:* string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationGitHub InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---


### DevopsagentAssociationConfigurationGitLabOutputReference <a name="DevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationGitLabOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier">ResetInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath">ResetProjectPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetInstanceIdentifier` <a name="ResetInstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier"></a>

```csharp
private void ResetInstanceIdentifier()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetProjectPath` <a name="ResetProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath"></a>

```csharp
private void ResetProjectPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput">InstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput">ProjectPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">InstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">ProjectPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceIdentifierInput`<sup>Optional</sup> <a name="InstanceIdentifierInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput"></a>

```csharp
public string InstanceIdentifierInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectPathInput`<sup>Optional</sup> <a name="ProjectPathInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput"></a>

```csharp
public string ProjectPathInput { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceIdentifier`<sup>Required</sup> <a name="InstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```csharp
public string InstanceIdentifier { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProjectPath`<sup>Required</sup> <a name="ProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```csharp
public string ProjectPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationGitLab InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---


### DevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerDatadogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerDatadog InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---


### DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools"></a>

```csharp
private void ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput">ToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">Tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput"></a>

```csharp
public string[] ToolsInput { get; }
```

- *Type:* string[]

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```csharp
public string[] Tools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerGrafana InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---


### DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerNewRelic InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---


### DevopsagentAssociationConfigurationMcpServerOutputReference <a name="DevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools"></a>

```csharp
private void ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput">ToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">Tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput"></a>

```csharp
public string[] ToolsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```csharp
public string[] Tools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---


### DevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerSigV4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools"></a>

```csharp
private void ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput">ToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">Tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput"></a>

```csharp
public string[] ToolsInput { get; }
```

- *Type:* string[]

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```csharp
public string[] Tools { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerSigV4 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---


### DevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationMcpServerSplunkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerSplunk InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---


### DevopsagentAssociationConfigurationOutputReference <a name="DevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace">PutDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel">PutEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub">PutGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab">PutGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer">PutMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog">PutMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana">PutMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic">PutMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4">PutMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk">PutMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty">PutPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws">PutSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace">ResetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel">ResetEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub">ResetGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab">ResetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer">ResetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog">ResetMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana">ResetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic">ResetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4">ResetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk">ResetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty">ResetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws">ResetSourceAws</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAws` <a name="PutAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws"></a>

```csharp
private void PutAws(DevopsagentAssociationConfigurationAws Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure"></a>

```csharp
private void PutAzure(DevopsagentAssociationConfigurationAzure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `PutDynatrace` <a name="PutDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace"></a>

```csharp
private void PutDynatrace(DevopsagentAssociationConfigurationDynatrace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `PutEventChannel` <a name="PutEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel"></a>

```csharp
private void PutEventChannel(DevopsagentAssociationConfigurationEventChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `PutGitHub` <a name="PutGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub"></a>

```csharp
private void PutGitHub(DevopsagentAssociationConfigurationGitHub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `PutGitLab` <a name="PutGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab"></a>

```csharp
private void PutGitLab(DevopsagentAssociationConfigurationGitLab Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `PutMcpServer` <a name="PutMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer"></a>

```csharp
private void PutMcpServer(DevopsagentAssociationConfigurationMcpServer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `PutMcpServerDatadog` <a name="PutMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog"></a>

```csharp
private void PutMcpServerDatadog(DevopsagentAssociationConfigurationMcpServerDatadog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `PutMcpServerGrafana` <a name="PutMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana"></a>

```csharp
private void PutMcpServerGrafana(DevopsagentAssociationConfigurationMcpServerGrafana Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `PutMcpServerNewRelic` <a name="PutMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic"></a>

```csharp
private void PutMcpServerNewRelic(DevopsagentAssociationConfigurationMcpServerNewRelic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `PutMcpServerSigV4` <a name="PutMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4"></a>

```csharp
private void PutMcpServerSigV4(DevopsagentAssociationConfigurationMcpServerSigV4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `PutMcpServerSplunk` <a name="PutMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk"></a>

```csharp
private void PutMcpServerSplunk(DevopsagentAssociationConfigurationMcpServerSplunk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `PutPagerDuty` <a name="PutPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty"></a>

```csharp
private void PutPagerDuty(DevopsagentAssociationConfigurationPagerDuty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow"></a>

```csharp
private void PutServiceNow(DevopsagentAssociationConfigurationServiceNow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack"></a>

```csharp
private void PutSlack(DevopsagentAssociationConfigurationSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `PutSourceAws` <a name="PutSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws"></a>

```csharp
private void PutSourceAws(DevopsagentAssociationConfigurationSourceAws Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws"></a>

```csharp
private void ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetDynatrace` <a name="ResetDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace"></a>

```csharp
private void ResetDynatrace()
```

##### `ResetEventChannel` <a name="ResetEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel"></a>

```csharp
private void ResetEventChannel()
```

##### `ResetGitHub` <a name="ResetGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub"></a>

```csharp
private void ResetGitHub()
```

##### `ResetGitLab` <a name="ResetGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab"></a>

```csharp
private void ResetGitLab()
```

##### `ResetMcpServer` <a name="ResetMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer"></a>

```csharp
private void ResetMcpServer()
```

##### `ResetMcpServerDatadog` <a name="ResetMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog"></a>

```csharp
private void ResetMcpServerDatadog()
```

##### `ResetMcpServerGrafana` <a name="ResetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana"></a>

```csharp
private void ResetMcpServerGrafana()
```

##### `ResetMcpServerNewRelic` <a name="ResetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic"></a>

```csharp
private void ResetMcpServerNewRelic()
```

##### `ResetMcpServerSigV4` <a name="ResetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4"></a>

```csharp
private void ResetMcpServerSigV4()
```

##### `ResetMcpServerSplunk` <a name="ResetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk"></a>

```csharp
private void ResetMcpServerSplunk()
```

##### `ResetPagerDuty` <a name="ResetPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty"></a>

```csharp
private void ResetPagerDuty()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow"></a>

```csharp
private void ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack"></a>

```csharp
private void ResetSlack()
```

##### `ResetSourceAws` <a name="ResetSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws"></a>

```csharp
private void ResetSourceAws()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel">EventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub">GitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">McpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws">SourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput">AwsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput">AzureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput">DynatraceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput">EventChannelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput">GitHubInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput">GitLabInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput">McpServerDatadogInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput">McpServerGrafanaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput">McpServerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput">McpServerNewRelicInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input">McpServerSigV4Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput">McpServerSplunkInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput">PagerDutyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput">SlackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput">SourceAwsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```csharp
public DevopsagentAssociationConfigurationAwsOutputReference Aws { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```csharp
public DevopsagentAssociationConfigurationAzureOutputReference Azure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```csharp
public DevopsagentAssociationConfigurationDynatraceOutputReference Dynatrace { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `EventChannel`<sup>Required</sup> <a name="EventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```csharp
public DevopsagentAssociationConfigurationEventChannelOutputReference EventChannel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `GitHub`<sup>Required</sup> <a name="GitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```csharp
public DevopsagentAssociationConfigurationGitHubOutputReference GitHub { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```csharp
public DevopsagentAssociationConfigurationGitLabOutputReference GitLab { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerOutputReference McpServer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `McpServerDatadog`<sup>Required</sup> <a name="McpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerDatadogOutputReference McpServerDatadog { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference McpServerGrafana { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference McpServerNewRelic { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerSigV4OutputReference McpServerSigV4 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```csharp
public DevopsagentAssociationConfigurationMcpServerSplunkOutputReference McpServerSplunk { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```csharp
public DevopsagentAssociationConfigurationPagerDutyOutputReference PagerDuty { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```csharp
public DevopsagentAssociationConfigurationServiceNowOutputReference ServiceNow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```csharp
public DevopsagentAssociationConfigurationSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `SourceAws`<sup>Required</sup> <a name="SourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```csharp
public DevopsagentAssociationConfigurationSourceAwsOutputReference SourceAws { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAws AwsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationAzure AzureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `DynatraceInput`<sup>Optional</sup> <a name="DynatraceInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationDynatrace DynatraceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `EventChannelInput`<sup>Optional</sup> <a name="EventChannelInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationEventChannel EventChannelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `GitHubInput`<sup>Optional</sup> <a name="GitHubInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationGitHub GitHubInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `GitLabInput`<sup>Optional</sup> <a name="GitLabInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationGitLab GitLabInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `McpServerDatadogInput`<sup>Optional</sup> <a name="McpServerDatadogInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerDatadog McpServerDatadogInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `McpServerGrafanaInput`<sup>Optional</sup> <a name="McpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerGrafana McpServerGrafanaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `McpServerInput`<sup>Optional</sup> <a name="McpServerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServer McpServerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `McpServerNewRelicInput`<sup>Optional</sup> <a name="McpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerNewRelic McpServerNewRelicInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `McpServerSigV4Input`<sup>Optional</sup> <a name="McpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerSigV4 McpServerSigV4Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `McpServerSplunkInput`<sup>Optional</sup> <a name="McpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationMcpServerSplunk McpServerSplunkInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `PagerDutyInput`<sup>Optional</sup> <a name="PagerDutyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationPagerDuty PagerDutyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationServiceNow ServiceNowInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSlack SlackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `SourceAwsInput`<sup>Optional</sup> <a name="SourceAwsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAws SourceAwsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---


### DevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationPagerDutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail">ResetCustomerEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerEmail` <a name="ResetCustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail"></a>

```csharp
private void ResetCustomerEmail()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetServices` <a name="ResetServices" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices"></a>

```csharp
private void ResetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput">CustomerEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">CustomerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">Services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerEmailInput`<sup>Optional</sup> <a name="CustomerEmailInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput"></a>

```csharp
public string CustomerEmailInput { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `CustomerEmail`<sup>Required</sup> <a name="CustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```csharp
public string CustomerEmail { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationPagerDuty InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---


### DevopsagentAssociationConfigurationServiceNowOutputReference <a name="DevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationServiceNowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates"></a>

```csharp
private void ResetEnableWebhookUpdates()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput"></a>

```csharp
public bool|IResolvable EnableWebhookUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```csharp
public bool|IResolvable EnableWebhookUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationServiceNow InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---


### DevopsagentAssociationConfigurationSlackOutputReference <a name="DevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget">PutTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget">ResetTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName">ResetWorkspaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransmissionTarget` <a name="PutTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget"></a>

```csharp
private void PutTransmissionTarget(DevopsagentAssociationConfigurationSlackTransmissionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `ResetTransmissionTarget` <a name="ResetTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget"></a>

```csharp
private void ResetTransmissionTarget()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

##### `ResetWorkspaceName` <a name="ResetWorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName"></a>

```csharp
private void ResetWorkspaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">TransmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput">TransmissionTargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">WorkspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransmissionTarget`<sup>Required</sup> <a name="TransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```csharp
public DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference TransmissionTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `TransmissionTargetInput`<sup>Optional</sup> <a name="TransmissionTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTarget TransmissionTargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput"></a>

```csharp
public string WorkspaceNameInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```csharp
public string WorkspaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName">ResetChannelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId"></a>

```csharp
private void ResetChannelId()
```

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName"></a>

```csharp
private void ResetChannelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget">PutIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget">ResetIncidentResponseTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncidentResponseTarget` <a name="PutIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget"></a>

```csharp
private void PutIncidentResponseTarget(DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `ResetIncidentResponseTarget` <a name="ResetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget"></a>

```csharp
private void ResetIncidentResponseTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">IncidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput">IncidentResponseTargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncidentResponseTarget`<sup>Required</sup> <a name="IncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```csharp
public DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference IncidentResponseTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `IncidentResponseTargetInput`<sup>Optional</sup> <a name="IncidentResponseTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget IncidentResponseTargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSlackTransmissionTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---


### DevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType">ResetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn">ResetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources"></a>

```csharp
private void PutResources(IResolvable|DevopsagentAssociationConfigurationSourceAwsResources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|DevopsagentAssociationConfigurationSourceAwsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAccountType` <a name="ResetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType"></a>

```csharp
private void ResetAccountType()
```

##### `ResetAssumableRoleArn` <a name="ResetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn"></a>

```csharp
private void ResetAssumableRoleArn()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput">AccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput">AssumableRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">AccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```csharp
public DevopsagentAssociationConfigurationSourceAwsResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```csharp
public DevopsagentAssociationConfigurationSourceAwsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AccountTypeInput`<sup>Optional</sup> <a name="AccountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput"></a>

```csharp
public string AccountTypeInput { get; }
```

- *Type:* string

---

##### `AssumableRoleArnInput`<sup>Optional</sup> <a name="AssumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput"></a>

```csharp
public string AssumableRoleArnInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsResources[] ResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```csharp
public string AccountType { get; }
```

- *Type:* string

---

##### `AssumableRoleArn`<sup>Required</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```csharp
public string AssumableRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAws InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---


### DevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```csharp
private DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>[]

---


### DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata">ResetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn"></a>

```csharp
private void ResetResourceArn()
```

##### `ResetResourceMetadata` <a name="ResetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata"></a>

```csharp
private void ResetResourceMetadata()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput">ResourceMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">ResourceMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput"></a>

```csharp
public string ResourceArnInput { get; }
```

- *Type:* string

---

##### `ResourceMetadataInput`<sup>Optional</sup> <a name="ResourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```csharp
public string ResourceMetadataInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `ResourceMetadata`<sup>Required</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```csharp
public string ResourceMetadata { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources">DevopsagentAssociationConfigurationSourceAwsResources</a>

---


### DevopsagentAssociationConfigurationSourceAwsTagsList <a name="DevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```csharp
private DevopsagentAssociationConfigurationSourceAwsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>[]

---


### DevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DevopsagentAssociationConfigurationSourceAwsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DevopsagentAssociationConfigurationSourceAwsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags">DevopsagentAssociationConfigurationSourceAwsTags</a>

---



