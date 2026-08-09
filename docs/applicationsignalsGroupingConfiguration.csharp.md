# `applicationsignalsGroupingConfiguration` Submodule <a name="`applicationsignalsGroupingConfiguration` Submodule" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsGroupingConfiguration <a name="ApplicationsignalsGroupingConfiguration" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration awscc_applicationsignals_grouping_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsGroupingConfiguration(Construct Scope, string Id, ApplicationsignalsGroupingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig">ApplicationsignalsGroupingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig">ApplicationsignalsGroupingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions">PutGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGroupingAttributeDefinitions` <a name="PutGroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions"></a>

```csharp
private void PutGroupingAttributeDefinitions(IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.putGroupingAttributeDefinitions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsGroupingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsGroupingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsGroupingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsGroupingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApplicationsignalsGroupingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationsignalsGroupingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationsignalsGroupingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsGroupingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions">GroupingAttributeDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitionsInput">GroupingAttributeDefinitionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `GroupingAttributeDefinitions`<sup>Required</sup> <a name="GroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitions"></a>

```csharp
public ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList GroupingAttributeDefinitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `GroupingAttributeDefinitionsInput`<sup>Optional</sup> <a name="GroupingAttributeDefinitionsInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.groupingAttributeDefinitionsInput"></a>

```csharp
public IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[] GroupingAttributeDefinitionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsGroupingConfigurationConfig <a name="ApplicationsignalsGroupingConfigurationConfig" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsGroupingConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[] GroupingAttributeDefinitions
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.groupingAttributeDefinitions">GroupingAttributeDefinitions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupingAttributeDefinitions`<sup>Required</sup> <a name="GroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationConfig.property.groupingAttributeDefinitions"></a>

```csharp
public IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[] GroupingAttributeDefinitions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#grouping_attribute_definitions ApplicationsignalsGroupingConfiguration#grouping_attribute_definitions}.

---

### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions {
    string GroupingName,
    string[] GroupingSourceKeys,
    string DefaultGroupingValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingName">GroupingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#grouping_name ApplicationsignalsGroupingConfiguration#grouping_name}. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingSourceKeys">GroupingSourceKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys ApplicationsignalsGroupingConfiguration#grouping_source_keys}. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.defaultGroupingValue">DefaultGroupingValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#default_grouping_value ApplicationsignalsGroupingConfiguration#default_grouping_value}. |

---

##### `GroupingName`<sup>Required</sup> <a name="GroupingName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingName"></a>

```csharp
public string GroupingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#grouping_name ApplicationsignalsGroupingConfiguration#grouping_name}.

---

##### `GroupingSourceKeys`<sup>Required</sup> <a name="GroupingSourceKeys" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.groupingSourceKeys"></a>

```csharp
public string[] GroupingSourceKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#grouping_source_keys ApplicationsignalsGroupingConfiguration#grouping_source_keys}.

---

##### `DefaultGroupingValue`<sup>Optional</sup> <a name="DefaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions.property.defaultGroupingValue"></a>

```csharp
public string DefaultGroupingValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationsignals_grouping_configuration#default_grouping_value ApplicationsignalsGroupingConfiguration#default_grouping_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get"></a>

```csharp
private ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsList.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>[]

---


### ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference <a name="ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resetDefaultGroupingValue">ResetDefaultGroupingValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultGroupingValue` <a name="ResetDefaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.resetDefaultGroupingValue"></a>

```csharp
private void ResetDefaultGroupingValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValueInput">DefaultGroupingValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingNameInput">GroupingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeysInput">GroupingSourceKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue">DefaultGroupingValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName">GroupingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys">GroupingSourceKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultGroupingValueInput`<sup>Optional</sup> <a name="DefaultGroupingValueInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValueInput"></a>

```csharp
public string DefaultGroupingValueInput { get; }
```

- *Type:* string

---

##### `GroupingNameInput`<sup>Optional</sup> <a name="GroupingNameInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingNameInput"></a>

```csharp
public string GroupingNameInput { get; }
```

- *Type:* string

---

##### `GroupingSourceKeysInput`<sup>Optional</sup> <a name="GroupingSourceKeysInput" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeysInput"></a>

```csharp
public string[] GroupingSourceKeysInput { get; }
```

- *Type:* string[]

---

##### `DefaultGroupingValue`<sup>Required</sup> <a name="DefaultGroupingValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.defaultGroupingValue"></a>

```csharp
public string DefaultGroupingValue { get; }
```

- *Type:* string

---

##### `GroupingName`<sup>Required</sup> <a name="GroupingName" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingName"></a>

```csharp
public string GroupingName { get; }
```

- *Type:* string

---

##### `GroupingSourceKeys`<sup>Required</sup> <a name="GroupingSourceKeys" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.groupingSourceKeys"></a>

```csharp
public string[] GroupingSourceKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsGroupingConfiguration.ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions">ApplicationsignalsGroupingConfigurationGroupingAttributeDefinitions</a>

---



