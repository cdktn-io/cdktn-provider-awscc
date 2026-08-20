# `dataAwsccSimspaceweaverSimulation` Submodule <a name="`dataAwsccSimspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSimspaceweaverSimulation <a name="DataAwsccSimspaceweaverSimulation" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSimspaceweaverSimulation(Construct Scope, string Id, DataAwsccSimspaceweaverSimulationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig">DataAwsccSimspaceweaverSimulationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig">DataAwsccSimspaceweaverSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSimspaceweaverSimulation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSimspaceweaverSimulation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSimspaceweaverSimulation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSimspaceweaverSimulation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSimspaceweaverSimulation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload">DescribePayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration">MaximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location">SchemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location">SnapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DescribePayload`<sup>Required</sup> <a name="DescribePayload" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload"></a>

```csharp
public string DescribePayload { get; }
```

- *Type:* string

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration"></a>

```csharp
public string MaximumDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SchemaS3Location`<sup>Required</sup> <a name="SchemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location"></a>

```csharp
public DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference SchemaS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `SnapshotS3Location`<sup>Required</sup> <a name="SnapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location"></a>

```csharp
public DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference SnapshotS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSimspaceweaverSimulationConfig <a name="DataAwsccSimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSimspaceweaverSimulationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/simspaceweaver_simulation#id DataAwsccSimspaceweaverSimulation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSimspaceweaverSimulationSchemaS3Location <a name="DataAwsccSimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSimspaceweaverSimulationSchemaS3Location {

};
```


### DataAwsccSimspaceweaverSimulationSnapshotS3Location <a name="DataAwsccSimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSimspaceweaverSimulationSnapshotS3Location {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSimspaceweaverSimulationSchemaS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a>

---


### DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSimspaceweaverSimulationSnapshotS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a>

---



