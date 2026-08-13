# `dataAwsccAppsyncSourceApiAssociation` Submodule <a name="`dataAwsccAppsyncSourceApiAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncSourceApiAssociation <a name="DataAwsccAppsyncSourceApiAssociation" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association awscc_appsync_source_api_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncSourceApiAssociation(Construct Scope, string Id, DataAwsccAppsyncSourceApiAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncSourceApiAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncSourceApiAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncSourceApiAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncSourceApiAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAppsyncSourceApiAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppsyncSourceApiAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppsyncSourceApiAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncSourceApiAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationArn">AssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lastSuccessfulMergeDate">LastSuccessfulMergeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiArn">MergedApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiId">MergedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiIdentifier">MergedApiIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiArn">SourceApiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationConfig">SourceApiAssociationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatus">SourceApiAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail">SourceApiAssociationStatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiId">SourceApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiIdentifier">SourceApiIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssociationArn`<sup>Required</sup> <a name="AssociationArn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationArn"></a>

```csharp
public string AssociationArn { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastSuccessfulMergeDate`<sup>Required</sup> <a name="LastSuccessfulMergeDate" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.lastSuccessfulMergeDate"></a>

```csharp
public string LastSuccessfulMergeDate { get; }
```

- *Type:* string

---

##### `MergedApiArn`<sup>Required</sup> <a name="MergedApiArn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiArn"></a>

```csharp
public string MergedApiArn { get; }
```

- *Type:* string

---

##### `MergedApiId`<sup>Required</sup> <a name="MergedApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiId"></a>

```csharp
public string MergedApiId { get; }
```

- *Type:* string

---

##### `MergedApiIdentifier`<sup>Required</sup> <a name="MergedApiIdentifier" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.mergedApiIdentifier"></a>

```csharp
public string MergedApiIdentifier { get; }
```

- *Type:* string

---

##### `SourceApiArn`<sup>Required</sup> <a name="SourceApiArn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiArn"></a>

```csharp
public string SourceApiArn { get; }
```

- *Type:* string

---

##### `SourceApiAssociationConfig`<sup>Required</sup> <a name="SourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationConfig"></a>

```csharp
public DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference SourceApiAssociationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference</a>

---

##### `SourceApiAssociationStatus`<sup>Required</sup> <a name="SourceApiAssociationStatus" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatus"></a>

```csharp
public string SourceApiAssociationStatus { get; }
```

- *Type:* string

---

##### `SourceApiAssociationStatusDetail`<sup>Required</sup> <a name="SourceApiAssociationStatusDetail" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiAssociationStatusDetail"></a>

```csharp
public string SourceApiAssociationStatusDetail { get; }
```

- *Type:* string

---

##### `SourceApiId`<sup>Required</sup> <a name="SourceApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiId"></a>

```csharp
public string SourceApiId { get; }
```

- *Type:* string

---

##### `SourceApiIdentifier`<sup>Required</sup> <a name="SourceApiIdentifier" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.sourceApiIdentifier"></a>

```csharp
public string SourceApiIdentifier { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncSourceApiAssociationConfig <a name="DataAwsccAppsyncSourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncSourceApiAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_source_api_association#id DataAwsccAppsyncSourceApiAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig <a name="DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference <a name="DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType">MergeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MergeType`<sup>Required</sup> <a name="MergeType" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.mergeType"></a>

```csharp
public string MergeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncSourceApiAssociation.DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig">DataAwsccAppsyncSourceApiAssociationSourceApiAssociationConfig</a>

---



