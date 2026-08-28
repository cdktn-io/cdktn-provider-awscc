# `dataAwsccSecurityagentAgentSpace` Submodule <a name="`dataAwsccSecurityagentAgentSpace` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentAgentSpace <a name="DataAwsccSecurityagentAgentSpace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space awscc_securityagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpace(Construct Scope, string Id, DataAwsccSecurityagentAgentSpaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig">DataAwsccSecurityagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig">DataAwsccSecurityagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentAgentSpace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentAgentSpace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentAgentSpace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSecurityagentAgentSpace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSecurityagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityagentAgentSpace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId">AgentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources">AwsResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings">CodeReviewSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources">IntegratedResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds">TargetDomainIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.agentSpaceId"></a>

```csharp
public string AgentSpaceId { get; }
```

- *Type:* string

---

##### `AwsResources`<sup>Required</sup> <a name="AwsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.awsResources"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference AwsResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference">DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference</a>

---

##### `CodeReviewSettings`<sup>Required</sup> <a name="CodeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.codeReviewSettings"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference CodeReviewSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference">DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IntegratedResources`<sup>Required</sup> <a name="IntegratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.integratedResources"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesList IntegratedResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tags"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList">DataAwsccSecurityagentAgentSpaceTagsList</a>

---

##### `TargetDomainIds`<sup>Required</sup> <a name="TargetDomainIds" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.targetDomainIds"></a>

```csharp
public string[] TargetDomainIds { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentAgentSpaceAwsResources <a name="DataAwsccSecurityagentAgentSpaceAwsResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceAwsResources {

};
```


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs {

};
```


### DataAwsccSecurityagentAgentSpaceCodeReviewSettings <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettings" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceCodeReviewSettings {

};
```


### DataAwsccSecurityagentAgentSpaceConfig <a name="DataAwsccSecurityagentAgentSpaceConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityagent_agent_space#id DataAwsccSecurityagentAgentSpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentAgentSpaceIntegratedResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResources {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities {

};
```


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository {

};
```


### DataAwsccSecurityagentAgentSpaceTags <a name="DataAwsccSecurityagentAgentSpaceTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns">LambdaFunctionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups">LogGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets">S3Buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns">SecretArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs">Vpcs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `LambdaFunctionArns`<sup>Required</sup> <a name="LambdaFunctionArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.lambdaFunctionArns"></a>

```csharp
public string[] LambdaFunctionArns { get; }
```

- *Type:* string[]

---

##### `LogGroups`<sup>Required</sup> <a name="LogGroups" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.logGroups"></a>

```csharp
public string[] LogGroups { get; }
```

- *Type:* string[]

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.s3Buckets"></a>

```csharp
public string[] S3Buckets { get; }
```

- *Type:* string[]

---

##### `SecretArns`<sup>Required</sup> <a name="SecretArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.secretArns"></a>

```csharp
public string[] SecretArns { get; }
```

- *Type:* string[]

---

##### `Vpcs`<sup>Required</sup> <a name="Vpcs" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.vpcs"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList Vpcs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceAwsResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResources">DataAwsccSecurityagentAgentSpaceAwsResources</a>

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get"></a>

```csharp
private DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference <a name="DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns">SecurityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn">VpcArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupArns`<sup>Required</sup> <a name="SecurityGroupArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.securityGroupArns"></a>

```csharp
public string[] SecurityGroupArns { get; }
```

- *Type:* string[]

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; }
```

- *Type:* string[]

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.vpcArn"></a>

```csharp
public string VpcArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs">DataAwsccSecurityagentAgentSpaceAwsResourcesVpcs</a>

---


### DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference <a name="DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning">ControlsScanning</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning">GeneralPurposeScanning</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlsScanning`<sup>Required</sup> <a name="ControlsScanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.controlsScanning"></a>

```csharp
public IResolvable ControlsScanning { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `GeneralPurposeScanning`<sup>Required</sup> <a name="GeneralPurposeScanning" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.generalPurposeScanning"></a>

```csharp
public IResolvable GeneralPurposeScanning { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceCodeReviewSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceCodeReviewSettings">DataAwsccSecurityagentAgentSpaceCodeReviewSettings</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get"></a>

```csharp
private DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration">Integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources">ProviderResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.integration"></a>

```csharp
public string Integration { get; }
```

- *Type:* string

---

##### `ProviderResources`<sup>Required</sup> <a name="ProviderResources" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.providerResources"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList ProviderResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResources">DataAwsccSecurityagentAgentSpaceIntegratedResources</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.leaveComments"></a>

```csharp
public IResolvable LeaveComments { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.remediateCode"></a>

```csharp
public IResolvable RemediateCode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument">CreateDocument</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument">FetchDocument</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument">UpdateDocument</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.createDocument"></a>

```csharp
public IResolvable CreateDocument { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FetchDocument`<sup>Required</sup> <a name="FetchDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.fetchDocument"></a>

```csharp
public IResolvable FetchDocument { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.updateDocument"></a>

```csharp
public IResolvable UpdateDocument { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId">PageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey">SpaceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle">SpaceTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.pageId"></a>

```csharp
public string PageId { get; }
```

- *Type:* string

---

##### `SpaceKey`<sup>Required</sup> <a name="SpaceKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceKey"></a>

```csharp
public string SpaceKey { get; }
```

- *Type:* string

---

##### `SpaceTitle`<sup>Required</sup> <a name="SpaceTitle" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.spaceTitle"></a>

```csharp
public string SpaceTitle { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocument</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.leaveComments"></a>

```csharp
public IResolvable LeaveComments { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.remediateCode"></a>

```csharp
public IResolvable RemediateCode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments">LeaveComments</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode">RemediateCode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeaveComments`<sup>Required</sup> <a name="LeaveComments" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.leaveComments"></a>

```csharp
public IResolvable LeaveComments { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RemediateCode`<sup>Required</sup> <a name="RemediateCode" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.remediateCode"></a>

```csharp
public IResolvable RemediateCode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilities</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepository</a>

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get"></a>

```csharp
private DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference <a name="DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities">BitbucketCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository">BitbucketRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities">ConfluenceCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument">ConfluenceDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities">GitHubCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository">GitHubRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities">GitLabCapabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository">GitLabRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitbucketCapabilities`<sup>Required</sup> <a name="BitbucketCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketCapabilities"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference BitbucketCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketCapabilitiesOutputReference</a>

---

##### `BitbucketRepository`<sup>Required</sup> <a name="BitbucketRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.bitbucketRepository"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference BitbucketRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesBitbucketRepositoryOutputReference</a>

---

##### `ConfluenceCapabilities`<sup>Required</sup> <a name="ConfluenceCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceCapabilities"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference ConfluenceCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceCapabilitiesOutputReference</a>

---

##### `ConfluenceDocument`<sup>Required</sup> <a name="ConfluenceDocument" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.confluenceDocument"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference ConfluenceDocument { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesConfluenceDocumentOutputReference</a>

---

##### `GitHubCapabilities`<sup>Required</sup> <a name="GitHubCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubCapabilities"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference GitHubCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubCapabilitiesOutputReference</a>

---

##### `GitHubRepository`<sup>Required</sup> <a name="GitHubRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitHubRepository"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference GitHubRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitHubRepositoryOutputReference</a>

---

##### `GitLabCapabilities`<sup>Required</sup> <a name="GitLabCapabilities" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabCapabilities"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference GitLabCapabilities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabCapabilitiesOutputReference</a>

---

##### `GitLabRepository`<sup>Required</sup> <a name="GitLabRepository" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.gitLabRepository"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference GitLabRepository { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesGitLabRepositoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources">DataAwsccSecurityagentAgentSpaceIntegratedResourcesProviderResources</a>

---


### DataAwsccSecurityagentAgentSpaceTagsList <a name="DataAwsccSecurityagentAgentSpaceTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get"></a>

```csharp
private DataAwsccSecurityagentAgentSpaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSecurityagentAgentSpaceTagsOutputReference <a name="DataAwsccSecurityagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSecurityagentAgentSpaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSecurityagentAgentSpaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentAgentSpace.DataAwsccSecurityagentAgentSpaceTags">DataAwsccSecurityagentAgentSpaceTags</a>

---



