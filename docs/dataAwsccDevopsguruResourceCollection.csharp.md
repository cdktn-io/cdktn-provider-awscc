# `dataAwsccDevopsguruResourceCollection` Submodule <a name="`dataAwsccDevopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDevopsguruResourceCollection <a name="DataAwsccDevopsguruResourceCollection" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollection(Construct Scope, string Id, DataAwsccDevopsguruResourceCollectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig">DataAwsccDevopsguruResourceCollectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig">DataAwsccDevopsguruResourceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsguruResourceCollection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsguruResourceCollection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsguruResourceCollection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDevopsguruResourceCollection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDevopsguruResourceCollection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionFilter">ResourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionType">ResourceCollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ResourceCollectionFilter`<sup>Required</sup> <a name="ResourceCollectionFilter" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```csharp
public DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference ResourceCollectionFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `ResourceCollectionType`<sup>Required</sup> <a name="ResourceCollectionType" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.resourceCollectionType"></a>

```csharp
public string ResourceCollectionType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDevopsguruResourceCollectionConfig <a name="DataAwsccDevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/devopsguru_resource_collection#id DataAwsccDevopsguruResourceCollection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDevopsguruResourceCollectionResourceCollectionFilter <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilter {

};
```


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation {

};
```


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">StackNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StackNames`<sup>Required</sup> <a name="StackNames" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```csharp
public string[] StackNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">Cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter">DataAwsccDevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cloudformation`<sup>Required</sup> <a name="Cloudformation" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```csharp
public DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference Cloudformation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```csharp
public DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsguruResourceCollectionResourceCollectionFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilter">DataAwsccDevopsguruResourceCollectionResourceCollectionFilter</a>

---


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```csharp
private DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">AppBoundaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppBoundaryKey`<sup>Required</sup> <a name="AppBoundaryKey" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```csharp
public string AppBoundaryKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDevopsguruResourceCollection.DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags">DataAwsccDevopsguruResourceCollectionResourceCollectionFilterTags</a>

---



