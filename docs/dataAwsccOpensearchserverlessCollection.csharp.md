# `dataAwsccOpensearchserverlessCollection` Submodule <a name="`dataAwsccOpensearchserverlessCollection` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserverlessCollection <a name="DataAwsccOpensearchserverlessCollection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchserverless_collection awscc_opensearchserverless_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollection(Construct Scope, string Id, DataAwsccOpensearchserverlessCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig">DataAwsccOpensearchserverlessCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig">DataAwsccOpensearchserverlessCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserverlessCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessCollection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOpensearchserverlessCollection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOpensearchserverlessCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOpensearchserverlessCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchserverless_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserverlessCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionGroupName">CollectionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference">DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fipsEndpoints">FipsEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference">DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList">DataAwsccOpensearchserverlessCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.vectorOptions">VectorOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference">DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionEndpoint"></a>

```csharp
public string CollectionEndpoint { get; }
```

- *Type:* string

---

##### `CollectionGroupName`<sup>Required</sup> <a name="CollectionGroupName" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionGroupName"></a>

```csharp
public string CollectionGroupName { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.dashboardEndpoint"></a>

```csharp
public string DashboardEndpoint { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.encryptionConfig"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference">DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference</a>

---

##### `FipsEndpoints`<sup>Required</sup> <a name="FipsEndpoints" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.fipsEndpoints"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference FipsEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference">DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tags"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList">DataAwsccOpensearchserverlessCollectionTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VectorOptions`<sup>Required</sup> <a name="VectorOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.vectorOptions"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference VectorOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference">DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserverlessCollectionConfig <a name="DataAwsccOpensearchserverlessCollectionConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearchserverless_collection#id DataAwsccOpensearchserverlessCollection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserverlessCollectionEncryptionConfig <a name="DataAwsccOpensearchserverlessCollectionEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionEncryptionConfig {

};
```


### DataAwsccOpensearchserverlessCollectionFipsEndpoints <a name="DataAwsccOpensearchserverlessCollectionFipsEndpoints" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionFipsEndpoints {

};
```


### DataAwsccOpensearchserverlessCollectionTags <a name="DataAwsccOpensearchserverlessCollectionTags" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionTags {

};
```


### DataAwsccOpensearchserverlessCollectionVectorOptions <a name="DataAwsccOpensearchserverlessCollectionVectorOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionVectorOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference <a name="DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey">AwsOwnedKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig">DataAwsccOpensearchserverlessCollectionEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsOwnedKey`<sup>Required</sup> <a name="AwsOwnedKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.awsOwnedKey"></a>

```csharp
public IResolvable AwsOwnedKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionEncryptionConfig">DataAwsccOpensearchserverlessCollectionEncryptionConfig</a>

---


### DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference <a name="DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint">CollectionEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint">DashboardEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints">DataAwsccOpensearchserverlessCollectionFipsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionEndpoint`<sup>Required</sup> <a name="CollectionEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.collectionEndpoint"></a>

```csharp
public string CollectionEndpoint { get; }
```

- *Type:* string

---

##### `DashboardEndpoint`<sup>Required</sup> <a name="DashboardEndpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.dashboardEndpoint"></a>

```csharp
public string DashboardEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionFipsEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionFipsEndpoints">DataAwsccOpensearchserverlessCollectionFipsEndpoints</a>

---


### DataAwsccOpensearchserverlessCollectionTagsList <a name="DataAwsccOpensearchserverlessCollectionTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.get"></a>

```csharp
private DataAwsccOpensearchserverlessCollectionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOpensearchserverlessCollectionTagsOutputReference <a name="DataAwsccOpensearchserverlessCollectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags">DataAwsccOpensearchserverlessCollectionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionTags">DataAwsccOpensearchserverlessCollectionTags</a>

---


### DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference <a name="DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration">ServerlessVectorAcceleration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions">DataAwsccOpensearchserverlessCollectionVectorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerlessVectorAcceleration`<sup>Required</sup> <a name="ServerlessVectorAcceleration" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.serverlessVectorAcceleration"></a>

```csharp
public string ServerlessVectorAcceleration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessCollectionVectorOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessCollection.DataAwsccOpensearchserverlessCollectionVectorOptions">DataAwsccOpensearchserverlessCollectionVectorOptions</a>

---



