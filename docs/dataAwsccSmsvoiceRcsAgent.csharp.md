# `dataAwsccSmsvoiceRcsAgent` Submodule <a name="`dataAwsccSmsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSmsvoiceRcsAgent <a name="DataAwsccSmsvoiceRcsAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgent(Construct Scope, string Id, DataAwsccSmsvoiceRcsAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig">DataAwsccSmsvoiceRcsAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig">DataAwsccSmsvoiceRcsAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceRcsAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceRcsAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceRcsAgent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSmsvoiceRcsAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSmsvoiceRcsAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.optOutListName">OptOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentArn">RcsAgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentId">RcsAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList">DataAwsccSmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.testingAgent">TestingAgent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference">DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3BucketName">TwoWayMediaS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">TwoWayMediaS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3Role">TwoWayMediaS3Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">TwoWayRcsEventsEnabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```csharp
public IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.optOutListName"></a>

```csharp
public string OptOutListName { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `RcsAgentArn`<sup>Required</sup> <a name="RcsAgentArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentArn"></a>

```csharp
public string RcsAgentArn { get; }
```

- *Type:* string

---

##### `RcsAgentId`<sup>Required</sup> <a name="RcsAgentId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.rcsAgentId"></a>

```csharp
public string RcsAgentId { get; }
```

- *Type:* string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```csharp
public IResolvable SelfManagedOptOutsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tags"></a>

```csharp
public DataAwsccSmsvoiceRcsAgentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList">DataAwsccSmsvoiceRcsAgentTagsList</a>

---

##### `TestingAgent`<sup>Required</sup> <a name="TestingAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.testingAgent"></a>

```csharp
public DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference TestingAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference">DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `TwoWayChannelArn`<sup>Required</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```csharp
public string TwoWayChannelArn { get; }
```

- *Type:* string

---

##### `TwoWayChannelRole`<sup>Required</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```csharp
public string TwoWayChannelRole { get; }
```

- *Type:* string

---

##### `TwoWayEnabled`<sup>Required</sup> <a name="TwoWayEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayEnabled"></a>

```csharp
public IResolvable TwoWayEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TwoWayMediaS3BucketName`<sup>Required</sup> <a name="TwoWayMediaS3BucketName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```csharp
public string TwoWayMediaS3BucketName { get; }
```

- *Type:* string

---

##### `TwoWayMediaS3KeyPrefix`<sup>Required</sup> <a name="TwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```csharp
public string TwoWayMediaS3KeyPrefix { get; }
```

- *Type:* string

---

##### `TwoWayMediaS3Role`<sup>Required</sup> <a name="TwoWayMediaS3Role" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```csharp
public string TwoWayMediaS3Role { get; }
```

- *Type:* string

---

##### `TwoWayRcsEventsEnabled`<sup>Required</sup> <a name="TwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```csharp
public string[] TwoWayRcsEventsEnabled { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSmsvoiceRcsAgentConfig <a name="DataAwsccSmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/smsvoice_rcs_agent#id DataAwsccSmsvoiceRcsAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSmsvoiceRcsAgentTags <a name="DataAwsccSmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgentTags {

};
```


### DataAwsccSmsvoiceRcsAgentTestingAgent <a name="DataAwsccSmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgentTestingAgent {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSmsvoiceRcsAgentTagsList <a name="DataAwsccSmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get"></a>

```csharp
private DataAwsccSmsvoiceRcsAgentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSmsvoiceRcsAgentTagsOutputReference <a name="DataAwsccSmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags">DataAwsccSmsvoiceRcsAgentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSmsvoiceRcsAgentTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTags">DataAwsccSmsvoiceRcsAgentTags</a>

---


### DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference <a name="DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">RegistrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">TestingAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">TestingAgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent">DataAwsccSmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegistrationId`<sup>Required</sup> <a name="RegistrationId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```csharp
public string RegistrationId { get; }
```

- *Type:* string

---

##### `TestingAgentId`<sup>Required</sup> <a name="TestingAgentId" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```csharp
public string TestingAgentId { get; }
```

- *Type:* string

---

##### `TestingAgentStatus`<sup>Required</sup> <a name="TestingAgentStatus" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```csharp
public string TestingAgentStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSmsvoiceRcsAgentTestingAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSmsvoiceRcsAgent.DataAwsccSmsvoiceRcsAgentTestingAgent">DataAwsccSmsvoiceRcsAgentTestingAgent</a>

---



