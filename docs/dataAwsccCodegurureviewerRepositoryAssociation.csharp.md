# `dataAwsccCodegurureviewerRepositoryAssociation` Submodule <a name="`dataAwsccCodegurureviewerRepositoryAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodegurureviewerRepositoryAssociation <a name="DataAwsccCodegurureviewerRepositoryAssociation" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codegurureviewer_repository_association awscc_codegurureviewer_repository_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodegurureviewerRepositoryAssociation(Construct Scope, string Id, DataAwsccCodegurureviewerRepositoryAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig">DataAwsccCodegurureviewerRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig">DataAwsccCodegurureviewerRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodegurureviewerRepositoryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodegurureviewerRepositoryAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodegurureviewerRepositoryAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodegurureviewerRepositoryAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodegurureviewerRepositoryAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCodegurureviewerRepositoryAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodegurureviewerRepositoryAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodegurureviewerRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codegurureviewer_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodegurureviewerRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.associationArn">AssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList">DataAwsccCodegurureviewerRepositoryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssociationArn`<sup>Required</sup> <a name="AssociationArn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.associationArn"></a>

```csharp
public string AssociationArn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.tags"></a>

```csharp
public DataAwsccCodegurureviewerRepositoryAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList">DataAwsccCodegurureviewerRepositoryAssociationTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodegurureviewerRepositoryAssociationConfig <a name="DataAwsccCodegurureviewerRepositoryAssociationConfig" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodegurureviewerRepositoryAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/codegurureviewer_repository_association#id DataAwsccCodegurureviewerRepositoryAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodegurureviewerRepositoryAssociationTags <a name="DataAwsccCodegurureviewerRepositoryAssociationTags" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodegurureviewerRepositoryAssociationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodegurureviewerRepositoryAssociationTagsList <a name="DataAwsccCodegurureviewerRepositoryAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodegurureviewerRepositoryAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.get"></a>

```csharp
private DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference <a name="DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTags">DataAwsccCodegurureviewerRepositoryAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodegurureviewerRepositoryAssociationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodegurureviewerRepositoryAssociation.DataAwsccCodegurureviewerRepositoryAssociationTags">DataAwsccCodegurureviewerRepositoryAssociationTags</a>

---



