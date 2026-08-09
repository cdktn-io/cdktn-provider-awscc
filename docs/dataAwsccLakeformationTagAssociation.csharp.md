# `dataAwsccLakeformationTagAssociation` Submodule <a name="`dataAwsccLakeformationTagAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLakeformationTagAssociation <a name="DataAwsccLakeformationTagAssociation" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lakeformation_tag_association awscc_lakeformation_tag_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociation(Construct Scope, string Id, DataAwsccLakeformationTagAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig">DataAwsccLakeformationTagAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig">DataAwsccLakeformationTagAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLakeformationTagAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLakeformationTagAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLakeformationTagAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLakeformationTagAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccLakeformationTagAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccLakeformationTagAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLakeformationTagAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLakeformationTagAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLakeformationTagAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lfTags">LfTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList">DataAwsccLakeformationTagAssociationLfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference">DataAwsccLakeformationTagAssociationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tagsIdentifier">TagsIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LfTags`<sup>Required</sup> <a name="LfTags" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.lfTags"></a>

```csharp
public DataAwsccLakeformationTagAssociationLfTagsList LfTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList">DataAwsccLakeformationTagAssociationLfTagsList</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resource"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceOutputReference Resource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference">DataAwsccLakeformationTagAssociationResourceOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `TagsIdentifier`<sup>Required</sup> <a name="TagsIdentifier" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tagsIdentifier"></a>

```csharp
public string TagsIdentifier { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLakeformationTagAssociationConfig <a name="DataAwsccLakeformationTagAssociationConfig" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lakeformation_tag_association#id DataAwsccLakeformationTagAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLakeformationTagAssociationLfTags <a name="DataAwsccLakeformationTagAssociationLfTags" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationLfTags {

};
```


### DataAwsccLakeformationTagAssociationResource <a name="DataAwsccLakeformationTagAssociationResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResource {

};
```


### DataAwsccLakeformationTagAssociationResourceDatabase <a name="DataAwsccLakeformationTagAssociationResourceDatabase" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceDatabase {

};
```


### DataAwsccLakeformationTagAssociationResourceTable <a name="DataAwsccLakeformationTagAssociationResourceTable" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceTable {

};
```


### DataAwsccLakeformationTagAssociationResourceTableWithColumns <a name="DataAwsccLakeformationTagAssociationResourceTableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceTableWithColumns {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLakeformationTagAssociationLfTagsList <a name="DataAwsccLakeformationTagAssociationLfTagsList" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationLfTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.get"></a>

```csharp
private DataAwsccLakeformationTagAssociationLfTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccLakeformationTagAssociationLfTagsOutputReference <a name="DataAwsccLakeformationTagAssociationLfTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationLfTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagValues">TagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags">DataAwsccLakeformationTagAssociationLfTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.tagValues"></a>

```csharp
public string[] TagValues { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLakeformationTagAssociationLfTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationLfTags">DataAwsccLakeformationTagAssociationLfTags</a>

---


### DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference <a name="DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase">DataAwsccLakeformationTagAssociationResourceDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceDatabase InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabase">DataAwsccLakeformationTagAssociationResourceDatabase</a>

---


### DataAwsccLakeformationTagAssociationResourceOutputReference <a name="DataAwsccLakeformationTagAssociationResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference">DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.table">Table</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference">DataAwsccLakeformationTagAssociationResourceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.tableWithColumns">TableWithColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference">DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource">DataAwsccLakeformationTagAssociationResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.database"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference">DataAwsccLakeformationTagAssociationResourceDatabaseOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.table"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference">DataAwsccLakeformationTagAssociationResourceTableOutputReference</a>

---

##### `TableWithColumns`<sup>Required</sup> <a name="TableWithColumns" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.tableWithColumns"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference TableWithColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference">DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLakeformationTagAssociationResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResource">DataAwsccLakeformationTagAssociationResource</a>

---


### DataAwsccLakeformationTagAssociationResourceTableOutputReference <a name="DataAwsccLakeformationTagAssociationResourceTableOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.tableWildcard">TableWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable">DataAwsccLakeformationTagAssociationResourceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TableWildcard`<sup>Required</sup> <a name="TableWildcard" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.tableWildcard"></a>

```csharp
public string TableWildcard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTable">DataAwsccLakeformationTagAssociationResourceTable</a>

---


### DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference <a name="DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns">DataAwsccLakeformationTagAssociationResourceTableWithColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccLakeformationTagAssociationResourceTableWithColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLakeformationTagAssociation.DataAwsccLakeformationTagAssociationResourceTableWithColumns">DataAwsccLakeformationTagAssociationResourceTableWithColumns</a>

---



