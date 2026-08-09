# `dataAwsccMedialiveEventBridgeRuleTemplate` Submodule <a name="`dataAwsccMedialiveEventBridgeRuleTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveEventBridgeRuleTemplate <a name="DataAwsccMedialiveEventBridgeRuleTemplate" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/medialive_event_bridge_rule_template awscc_medialive_event_bridge_rule_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveEventBridgeRuleTemplate(Construct Scope, string Id, DataAwsccMedialiveEventBridgeRuleTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig">DataAwsccMedialiveEventBridgeRuleTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig">DataAwsccMedialiveEventBridgeRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveEventBridgeRuleTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveEventBridgeRuleTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveEventBridgeRuleTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMedialiveEventBridgeRuleTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveEventBridgeRuleTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveEventBridgeRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/medialive_event_bridge_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveEventBridgeRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId">EventBridgeRuleTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventTargets">EventTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList">DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventBridgeRuleTemplateId`<sup>Required</sup> <a name="EventBridgeRuleTemplateId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId"></a>

```csharp
public string EventBridgeRuleTemplateId { get; }
```

- *Type:* string

---

##### `EventTargets`<sup>Required</sup> <a name="EventTargets" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventTargets"></a>

```csharp
public DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList EventTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList">DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList</a>

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveEventBridgeRuleTemplateConfig <a name="DataAwsccMedialiveEventBridgeRuleTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveEventBridgeRuleTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/medialive_event_bridge_rule_template#id DataAwsccMedialiveEventBridgeRuleTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveEventBridgeRuleTemplateEventTargets <a name="DataAwsccMedialiveEventBridgeRuleTemplateEventTargets" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveEventBridgeRuleTemplateEventTargets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList <a name="DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.get"></a>

```csharp
private DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference <a name="DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets">DataAwsccMedialiveEventBridgeRuleTemplateEventTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMedialiveEventBridgeRuleTemplateEventTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveEventBridgeRuleTemplate.DataAwsccMedialiveEventBridgeRuleTemplateEventTargets">DataAwsccMedialiveEventBridgeRuleTemplateEventTargets</a>

---



