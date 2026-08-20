# `dataAwsccAwsexternalanthropicWorkspace` Submodule <a name="`dataAwsccAwsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAwsexternalanthropicWorkspace <a name="DataAwsccAwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspace(Construct Scope, string Id, DataAwsccAwsexternalanthropicWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig">DataAwsccAwsexternalanthropicWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig">DataAwsccAwsexternalanthropicWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAwsexternalanthropicWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAwsexternalanthropicWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAwsexternalanthropicWorkspace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAwsexternalanthropicWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAwsexternalanthropicWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dataResidency">DataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference">DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList">DataAwsccAwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataResidency`<sup>Required</sup> <a name="DataResidency" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.dataResidency"></a>

```csharp
public DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference DataResidency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference">DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tags"></a>

```csharp
public DataAwsccAwsexternalanthropicWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList">DataAwsccAwsexternalanthropicWorkspaceTagsList</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAwsexternalanthropicWorkspaceConfig <a name="DataAwsccAwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/awsexternalanthropic_workspace#id DataAwsccAwsexternalanthropicWorkspace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAwsexternalanthropicWorkspaceDataResidency <a name="DataAwsccAwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspaceDataResidency {

};
```


### DataAwsccAwsexternalanthropicWorkspaceTags <a name="DataAwsccAwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspaceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">AllowedInferenceGeos</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">DefaultInferenceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">WorkspaceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency">DataAwsccAwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInferenceGeos`<sup>Required</sup> <a name="AllowedInferenceGeos" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```csharp
public string[] AllowedInferenceGeos { get; }
```

- *Type:* string[]

---

##### `DefaultInferenceGeo`<sup>Required</sup> <a name="DefaultInferenceGeo" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```csharp
public string DefaultInferenceGeo { get; }
```

- *Type:* string

---

##### `WorkspaceGeo`<sup>Required</sup> <a name="WorkspaceGeo" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```csharp
public string WorkspaceGeo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAwsexternalanthropicWorkspaceDataResidency InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceDataResidency">DataAwsccAwsexternalanthropicWorkspaceDataResidency</a>

---


### DataAwsccAwsexternalanthropicWorkspaceTagsList <a name="DataAwsccAwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get"></a>

```csharp
private DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference <a name="DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags">DataAwsccAwsexternalanthropicWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAwsexternalanthropicWorkspaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAwsexternalanthropicWorkspace.DataAwsccAwsexternalanthropicWorkspaceTags">DataAwsccAwsexternalanthropicWorkspaceTags</a>

---



