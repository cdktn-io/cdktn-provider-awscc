# `dataAwsccCodestarconnectionsRepositoryLink` Submodule <a name="`dataAwsccCodestarconnectionsRepositoryLink` Submodule" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodestarconnectionsRepositoryLink <a name="DataAwsccCodestarconnectionsRepositoryLink" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codestarconnections_repository_link awscc_codestarconnections_repository_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarconnectionsRepositoryLink(Construct Scope, string Id, DataAwsccCodestarconnectionsRepositoryLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig">DataAwsccCodestarconnectionsRepositoryLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig">DataAwsccCodestarconnectionsRepositoryLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarconnectionsRepositoryLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarconnectionsRepositoryLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarconnectionsRepositoryLink.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCodestarconnectionsRepositoryLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCodestarconnectionsRepositoryLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodestarconnectionsRepositoryLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodestarconnectionsRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codestarconnections_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodestarconnectionsRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.connectionArn">ConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.encryptionKeyArn">EncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkArn">RepositoryLinkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkId">RepositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList">DataAwsccCodestarconnectionsRepositoryLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ConnectionArn`<sup>Required</sup> <a name="ConnectionArn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.connectionArn"></a>

```csharp
public string ConnectionArn { get; }
```

- *Type:* string

---

##### `EncryptionKeyArn`<sup>Required</sup> <a name="EncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.encryptionKeyArn"></a>

```csharp
public string EncryptionKeyArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `RepositoryLinkArn`<sup>Required</sup> <a name="RepositoryLinkArn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkArn"></a>

```csharp
public string RepositoryLinkArn { get; }
```

- *Type:* string

---

##### `RepositoryLinkId`<sup>Required</sup> <a name="RepositoryLinkId" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryLinkId"></a>

```csharp
public string RepositoryLinkId { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tags"></a>

```csharp
public DataAwsccCodestarconnectionsRepositoryLinkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList">DataAwsccCodestarconnectionsRepositoryLinkTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodestarconnectionsRepositoryLinkConfig <a name="DataAwsccCodestarconnectionsRepositoryLinkConfig" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarconnectionsRepositoryLinkConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/codestarconnections_repository_link#id DataAwsccCodestarconnectionsRepositoryLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodestarconnectionsRepositoryLinkTags <a name="DataAwsccCodestarconnectionsRepositoryLinkTags" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarconnectionsRepositoryLinkTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodestarconnectionsRepositoryLinkTagsList <a name="DataAwsccCodestarconnectionsRepositoryLinkTagsList" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarconnectionsRepositoryLinkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.get"></a>

```csharp
private DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference <a name="DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags">DataAwsccCodestarconnectionsRepositoryLinkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCodestarconnectionsRepositoryLinkTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarconnectionsRepositoryLink.DataAwsccCodestarconnectionsRepositoryLinkTags">DataAwsccCodestarconnectionsRepositoryLinkTags</a>

---



