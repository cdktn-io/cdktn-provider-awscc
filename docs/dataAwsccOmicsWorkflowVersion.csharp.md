# `dataAwsccOmicsWorkflowVersion` Submodule <a name="`dataAwsccOmicsWorkflowVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOmicsWorkflowVersion <a name="DataAwsccOmicsWorkflowVersion" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/omics_workflow_version awscc_omics_workflow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowVersion(Construct Scope, string Id, DataAwsccOmicsWorkflowVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig">DataAwsccOmicsWorkflowVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig">DataAwsccOmicsWorkflowVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOmicsWorkflowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflowVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflowVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflowVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflowVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOmicsWorkflowVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOmicsWorkflowVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOmicsWorkflowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/omics_workflow_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOmicsWorkflowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.accelerators">Accelerators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.definitionUri">DefinitionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.main">Main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.parameterTemplate">ParameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap">DataAwsccOmicsWorkflowVersionParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowBucketOwnerId">WorkflowBucketOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.accelerators"></a>

```csharp
public string Accelerators { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DefinitionUri`<sup>Required</sup> <a name="DefinitionUri" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.definitionUri"></a>

```csharp
public string DefinitionUri { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Main`<sup>Required</sup> <a name="Main" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.main"></a>

```csharp
public string Main { get; }
```

- *Type:* string

---

##### `ParameterTemplate`<sup>Required</sup> <a name="ParameterTemplate" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.parameterTemplate"></a>

```csharp
public DataAwsccOmicsWorkflowVersionParameterTemplateMap ParameterTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap">DataAwsccOmicsWorkflowVersionParameterTemplateMap</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

##### `WorkflowBucketOwnerId`<sup>Required</sup> <a name="WorkflowBucketOwnerId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowBucketOwnerId"></a>

```csharp
public string WorkflowBucketOwnerId { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOmicsWorkflowVersionConfig <a name="DataAwsccOmicsWorkflowVersionConfig" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/omics_workflow_version#id DataAwsccOmicsWorkflowVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOmicsWorkflowVersionParameterTemplate <a name="DataAwsccOmicsWorkflowVersionParameterTemplate" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowVersionParameterTemplate {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOmicsWorkflowVersionParameterTemplateMap <a name="DataAwsccOmicsWorkflowVersionParameterTemplateMap" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowVersionParameterTemplateMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.get"></a>

```csharp
private DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference <a name="DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.optional">Optional</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate">DataAwsccOmicsWorkflowVersionParameterTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.optional"></a>

```csharp
public IResolvable Optional { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOmicsWorkflowVersionParameterTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflowVersion.DataAwsccOmicsWorkflowVersionParameterTemplate">DataAwsccOmicsWorkflowVersionParameterTemplate</a>

---



