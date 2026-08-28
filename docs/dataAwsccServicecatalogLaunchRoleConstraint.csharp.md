# `dataAwsccServicecatalogLaunchRoleConstraint` Submodule <a name="`dataAwsccServicecatalogLaunchRoleConstraint` Submodule" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicecatalogLaunchRoleConstraint <a name="DataAwsccServicecatalogLaunchRoleConstraint" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_launch_role_constraint awscc_servicecatalog_launch_role_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogLaunchRoleConstraint(Construct Scope, string Id, DataAwsccServicecatalogLaunchRoleConstraintConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig">DataAwsccServicecatalogLaunchRoleConstraintConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig">DataAwsccServicecatalogLaunchRoleConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicecatalogLaunchRoleConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogLaunchRoleConstraint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogLaunchRoleConstraint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogLaunchRoleConstraint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicecatalogLaunchRoleConstraint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccServicecatalogLaunchRoleConstraint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccServicecatalogLaunchRoleConstraint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccServicecatalogLaunchRoleConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_launch_role_constraint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicecatalogLaunchRoleConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.launchRoleConstraintId">LaunchRoleConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.localRoleName">LocalRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.portfolioId">PortfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LaunchRoleConstraintId`<sup>Required</sup> <a name="LaunchRoleConstraintId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.launchRoleConstraintId"></a>

```csharp
public string LaunchRoleConstraintId { get; }
```

- *Type:* string

---

##### `LocalRoleName`<sup>Required</sup> <a name="LocalRoleName" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.localRoleName"></a>

```csharp
public string LocalRoleName { get; }
```

- *Type:* string

---

##### `PortfolioId`<sup>Required</sup> <a name="PortfolioId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.portfolioId"></a>

```csharp
public string PortfolioId { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicecatalogLaunchRoleConstraintConfig <a name="DataAwsccServicecatalogLaunchRoleConstraintConfig" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicecatalogLaunchRoleConstraintConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicecatalogLaunchRoleConstraint.DataAwsccServicecatalogLaunchRoleConstraintConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicecatalog_launch_role_constraint#id DataAwsccServicecatalogLaunchRoleConstraint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



