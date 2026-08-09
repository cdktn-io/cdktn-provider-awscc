# `dataAwsccRedshiftEndpointAccess` Submodule <a name="`dataAwsccRedshiftEndpointAccess` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftEndpointAccess <a name="DataAwsccRedshiftEndpointAccess" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_endpoint_access awscc_redshift_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccess(Construct Scope, string Id, DataAwsccRedshiftEndpointAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig">DataAwsccRedshiftEndpointAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig">DataAwsccRedshiftEndpointAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftEndpointAccess resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftEndpointAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftEndpointAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftEndpointAccess.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftEndpointAccess.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRedshiftEndpointAccess resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRedshiftEndpointAccess to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRedshiftEndpointAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_endpoint_access#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftEndpointAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.endpointCreateTime">EndpointCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.endpointStatus">EndpointStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.subnetGroupName">SubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.vpcEndpoint">VpcEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference">DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.vpcSecurityGroups">VpcSecurityGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList">DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `EndpointCreateTime`<sup>Required</sup> <a name="EndpointCreateTime" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.endpointCreateTime"></a>

```csharp
public string EndpointCreateTime { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.endpointStatus"></a>

```csharp
public string EndpointStatus { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.subnetGroupName"></a>

```csharp
public string SubnetGroupName { get; }
```

- *Type:* string

---

##### `VpcEndpoint`<sup>Required</sup> <a name="VpcEndpoint" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.vpcEndpoint"></a>

```csharp
public DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference VpcEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference">DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference</a>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VpcSecurityGroups`<sup>Required</sup> <a name="VpcSecurityGroups" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.vpcSecurityGroups"></a>

```csharp
public DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList VpcSecurityGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList">DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftEndpointAccessConfig <a name="DataAwsccRedshiftEndpointAccessConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/redshift_endpoint_access#id DataAwsccRedshiftEndpointAccess#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftEndpointAccessVpcEndpoint <a name="DataAwsccRedshiftEndpointAccessVpcEndpoint" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcEndpoint {

};
```


### DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces <a name="DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces {

};
```


### DataAwsccRedshiftEndpointAccessVpcSecurityGroups <a name="DataAwsccRedshiftEndpointAccessVpcSecurityGroups" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcSecurityGroups {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList <a name="DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.get"></a>

```csharp
private DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference <a name="DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces">DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces">DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfaces</a>

---


### DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference <a name="DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList">DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpoint">DataAwsccRedshiftEndpointAccessVpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.networkInterfaces"></a>

```csharp
public DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList">DataAwsccRedshiftEndpointAccessVpcEndpointNetworkInterfacesList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftEndpointAccessVpcEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcEndpoint">DataAwsccRedshiftEndpointAccessVpcEndpoint</a>

---


### DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList <a name="DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.get"></a>

```csharp
private DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference <a name="DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.vpcSecurityGroupId">VpcSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroups">DataAwsccRedshiftEndpointAccessVpcSecurityGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupId`<sup>Required</sup> <a name="VpcSecurityGroupId" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.vpcSecurityGroupId"></a>

```csharp
public string VpcSecurityGroupId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroupsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftEndpointAccessVpcSecurityGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftEndpointAccess.DataAwsccRedshiftEndpointAccessVpcSecurityGroups">DataAwsccRedshiftEndpointAccessVpcSecurityGroups</a>

---



