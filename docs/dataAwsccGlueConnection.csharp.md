# `dataAwsccGlueConnection` Submodule <a name="`dataAwsccGlueConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueConnection <a name="DataAwsccGlueConnection" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection awscc_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnection(Construct Scope, string Id, DataAwsccGlueConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig">DataAwsccGlueConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig">DataAwsccGlueConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGlueConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGlueConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.connectionInput">ConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference">DataAwsccGlueConnectionConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ConnectionInput`<sup>Required</sup> <a name="ConnectionInput" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.connectionInput"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputOutputReference ConnectionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference">DataAwsccGlueConnectionConnectionInputOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueConnectionConfig <a name="DataAwsccGlueConnectionConfig" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_connection#id DataAwsccGlueConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueConnectionConnectionInput <a name="DataAwsccGlueConnectionConnectionInput" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInput {

};
```


### DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration {

};
```


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials {

};
```


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties {

};
```


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {

};
```


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication {

};
```


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials {

};
```


### DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements <a name="DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReference`<sup>Required</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientId`<sup>Required</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">JwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `JwtToken`<sup>Required</sup> <a name="JwtToken" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```csharp
public string JwtToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecret`<sup>Required</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeProperties`<sup>Required</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference AuthorizationCodeProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `OAuth2ClientApplication`<sup>Required</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference OAuth2ClientApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `OAuth2Credentials`<sup>Required</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference OAuth2Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `OAuth2GrantType`<sup>Required</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```csharp
public string OAuth2GrantType { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMap`<sup>Required</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```csharp
public string TokenUrlParametersMap { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference <a name="DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration">DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentials`<sup>Required</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference BasicAuthenticationCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `CustomAuthenticationCredentials`<sup>Required</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```csharp
public string CustomAuthenticationCredentials { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `OAuth2Properties`<sup>Required</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference OAuth2Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration">DataAwsccGlueConnectionConnectionInputAuthenticationConfiguration</a>

---


### DataAwsccGlueConnectionConnectionInputOutputReference <a name="DataAwsccGlueConnectionConnectionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.athenaProperties">AthenaProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.connectionProperties">ConnectionProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.matchCriteria">MatchCriteria</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.pythonProperties">PythonProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.validateCredentials">ValidateCredentials</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInput">DataAwsccGlueConnectionConnectionInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.athenaProperties"></a>

```csharp
public string AthenaProperties { get; }
```

- *Type:* string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.authenticationConfiguration"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference">DataAwsccGlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.connectionProperties"></a>

```csharp
public string ConnectionProperties { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.matchCriteria"></a>

```csharp
public string[] MatchCriteria { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhysicalConnectionRequirements`<sup>Required</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference PhysicalConnectionRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `PythonProperties`<sup>Required</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.pythonProperties"></a>

```csharp
public string PythonProperties { get; }
```

- *Type:* string

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.sparkProperties"></a>

```csharp
public string SparkProperties { get; }
```

- *Type:* string

---

##### `ValidateCredentials`<sup>Required</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.validateCredentials"></a>

```csharp
public IResolvable ValidateCredentials { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ValidateForComputeEnvironments`<sup>Required</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```csharp
public string[] ValidateForComputeEnvironments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInput">DataAwsccGlueConnectionConnectionInput</a>

---


### DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements">DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueConnection.DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements">DataAwsccGlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---



