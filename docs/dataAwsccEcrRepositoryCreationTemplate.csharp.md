# `dataAwsccEcrRepositoryCreationTemplate` Submodule <a name="`dataAwsccEcrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcrRepositoryCreationTemplate <a name="DataAwsccEcrRepositoryCreationTemplate" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecr_repository_creation_template awscc_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplate(Construct Scope, string Id, DataAwsccEcrRepositoryCreationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig">DataAwsccEcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig">DataAwsccEcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcrRepositoryCreationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcrRepositoryCreationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcrRepositoryCreationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcrRepositoryCreationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEcrRepositoryCreationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.appliedFor">AppliedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutability">ImageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList">DataAwsccEcrRepositoryCreationTemplateResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.appliedFor"></a>

```csharp
public string[] AppliedFor { get; }
```

- *Type:* string[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```csharp
public DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a>

---

##### `ImageTagMutability`<sup>Required</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```csharp
public string ImageTagMutability { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilters`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters"></a>

```csharp
public DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList ImageTagMutabilityExclusionFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a>

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```csharp
public string LifecyclePolicy { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RepositoryPolicy`<sup>Required</sup> <a name="RepositoryPolicy" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```csharp
public string RepositoryPolicy { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.resourceTags"></a>

```csharp
public DataAwsccEcrRepositoryCreationTemplateResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList">DataAwsccEcrRepositoryCreationTemplateResourceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcrRepositoryCreationTemplateConfig <a name="DataAwsccEcrRepositoryCreationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ecr_repository_creation_template#id DataAwsccEcrRepositoryCreationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration <a name="DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration {

};
```


### DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters <a name="DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters {

};
```


### DataAwsccEcrRepositoryCreationTemplateResourceTags <a name="DataAwsccEcrRepositoryCreationTemplateResourceTags" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateResourceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration">DataAwsccEcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList <a name="DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get"></a>

```csharp
private DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference <a name="DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```csharp
public string ImageTagMutabilityExclusionFilterType { get; }
```

- *Type:* string

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```csharp
public string ImageTagMutabilityExclusionFilterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">DataAwsccEcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>

---


### DataAwsccEcrRepositoryCreationTemplateResourceTagsList <a name="DataAwsccEcrRepositoryCreationTemplateResourceTagsList" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.get"></a>

```csharp
private DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference <a name="DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags">DataAwsccEcrRepositoryCreationTemplateResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEcrRepositoryCreationTemplateResourceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcrRepositoryCreationTemplate.DataAwsccEcrRepositoryCreationTemplateResourceTags">DataAwsccEcrRepositoryCreationTemplateResourceTags</a>

---



