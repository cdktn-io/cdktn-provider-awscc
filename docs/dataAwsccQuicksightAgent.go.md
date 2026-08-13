# `dataAwsccQuicksightAgent` Submodule <a name="`dataAwsccQuicksightAgent` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightAgent <a name="DataAwsccQuicksightAgent" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_agent awscc_quicksight_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgent(scope Construct, id *string, config DataAwsccQuicksightAgentConfig) DataAwsccQuicksightAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig">DataAwsccQuicksightAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig">DataAwsccQuicksightAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.DataAwsccQuicksightAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.DataAwsccQuicksightAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.DataAwsccQuicksightAgent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.DataAwsccQuicksightAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQuicksightAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQuicksightAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQuicksightAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.actionConnectors">ActionConnectors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentLifecycle">AgentLifecycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInput">CustomPromptInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference">DataAwsccQuicksightAgentCustomPromptInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInterface">CustomPromptInterface</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference">DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.iconId">IconId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.spaces">Spaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.starterPrompts">StarterPrompts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList">DataAwsccQuicksightAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.welcomeMessage">WelcomeMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActionConnectors`<sup>Required</sup> <a name="ActionConnectors" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.actionConnectors"></a>

```go
func ActionConnectors() *[]*string
```

- *Type:* *[]*string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `AgentLifecycle`<sup>Required</sup> <a name="AgentLifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentLifecycle"></a>

```go
func AgentLifecycle() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `CustomPromptInput`<sup>Required</sup> <a name="CustomPromptInput" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInput"></a>

```go
func CustomPromptInput() DataAwsccQuicksightAgentCustomPromptInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference">DataAwsccQuicksightAgentCustomPromptInputOutputReference</a>

---

##### `CustomPromptInterface`<sup>Required</sup> <a name="CustomPromptInterface" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInterface"></a>

```go
func CustomPromptInterface() DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference">DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `IconId`<sup>Required</sup> <a name="IconId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.iconId"></a>

```go
func IconId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Spaces`<sup>Required</sup> <a name="Spaces" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.spaces"></a>

```go
func Spaces() *[]*string
```

- *Type:* *[]*string

---

##### `StarterPrompts`<sup>Required</sup> <a name="StarterPrompts" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.starterPrompts"></a>

```go
func StarterPrompts() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tags"></a>

```go
func Tags() DataAwsccQuicksightAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList">DataAwsccQuicksightAgentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WelcomeMessage`<sup>Required</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.welcomeMessage"></a>

```go
func WelcomeMessage() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightAgentConfig <a name="DataAwsccQuicksightAgentConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

&dataawsccquicksightagent.DataAwsccQuicksightAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_agent#id DataAwsccQuicksightAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightAgentCustomPromptInput <a name="DataAwsccQuicksightAgentCustomPromptInput" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

&dataawsccquicksightagent.DataAwsccQuicksightAgentCustomPromptInput {

}
```


### DataAwsccQuicksightAgentCustomPromptInputExistingPrompt <a name="DataAwsccQuicksightAgentCustomPromptInputExistingPrompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

&dataawsccquicksightagent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt {

}
```


### DataAwsccQuicksightAgentCustomPromptInputNewPrompt <a name="DataAwsccQuicksightAgentCustomPromptInputNewPrompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

&dataawsccquicksightagent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt {

}
```


### DataAwsccQuicksightAgentCustomPromptInterface <a name="DataAwsccQuicksightAgentCustomPromptInterface" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

&dataawsccquicksightagent.DataAwsccQuicksightAgentCustomPromptInterface {

}
```


### DataAwsccQuicksightAgentTags <a name="DataAwsccQuicksightAgentTags" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

&dataawsccquicksightagent.DataAwsccQuicksightAgentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId">ModelProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId">QbsAwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt">DataAwsccQuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelProfileId`<sup>Required</sup> <a name="ModelProfileId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId"></a>

```go
func ModelProfileId() *string
```

- *Type:* *string

---

##### `QbsAwsAccountId`<sup>Required</sup> <a name="QbsAwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId"></a>

```go
func QbsAwsAccountId() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAgentCustomPromptInputExistingPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt">DataAwsccQuicksightAgentCustomPromptInputExistingPrompt</a>

---


### DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions">CustomInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle">OutputStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength">ResponseLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone">Tone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt">DataAwsccQuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions"></a>

```go
func CustomInstructions() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `OutputStyle`<sup>Required</sup> <a name="OutputStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle"></a>

```go
func OutputStyle() *string
```

- *Type:* *string

---

##### `ResponseLength`<sup>Required</sup> <a name="ResponseLength" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength"></a>

```go
func ResponseLength() *string
```

- *Type:* *string

---

##### `Tone`<sup>Required</sup> <a name="Tone" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone"></a>

```go
func Tone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAgentCustomPromptInputNewPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt">DataAwsccQuicksightAgentCustomPromptInputNewPrompt</a>

---


### DataAwsccQuicksightAgentCustomPromptInputOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInputOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgentCustomPromptInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAgentCustomPromptInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.existingPrompt">ExistingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.newPrompt">NewPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput">DataAwsccQuicksightAgentCustomPromptInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExistingPrompt`<sup>Required</sup> <a name="ExistingPrompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.existingPrompt"></a>

```go
func ExistingPrompt() DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference</a>

---

##### `NewPrompt`<sup>Required</sup> <a name="NewPrompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.newPrompt"></a>

```go
func NewPrompt() DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAgentCustomPromptInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput">DataAwsccQuicksightAgentCustomPromptInput</a>

---


### DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgentCustomPromptInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions">CustomInstructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.identity">Identity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId">ModelProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle">OutputStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary">PromptSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId">QbsAwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength">ResponseLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.tone">Tone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface">DataAwsccQuicksightAgentCustomPromptInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions"></a>

```go
func CustomInstructions() *string
```

- *Type:* *string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.identity"></a>

```go
func Identity() *string
```

- *Type:* *string

---

##### `ModelProfileId`<sup>Required</sup> <a name="ModelProfileId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId"></a>

```go
func ModelProfileId() *string
```

- *Type:* *string

---

##### `OutputStyle`<sup>Required</sup> <a name="OutputStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle"></a>

```go
func OutputStyle() *string
```

- *Type:* *string

---

##### `PromptSummary`<sup>Required</sup> <a name="PromptSummary" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary"></a>

```go
func PromptSummary() *string
```

- *Type:* *string

---

##### `QbsAwsAccountId`<sup>Required</sup> <a name="QbsAwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId"></a>

```go
func QbsAwsAccountId() *string
```

- *Type:* *string

---

##### `ResponseLength`<sup>Required</sup> <a name="ResponseLength" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength"></a>

```go
func ResponseLength() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `Tone`<sup>Required</sup> <a name="Tone" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.tone"></a>

```go
func Tone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAgentCustomPromptInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface">DataAwsccQuicksightAgentCustomPromptInterface</a>

---


### DataAwsccQuicksightAgentTagsList <a name="DataAwsccQuicksightAgentTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightAgentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightAgentTagsOutputReference <a name="DataAwsccQuicksightAgentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightagent"

dataawsccquicksightagent.NewDataAwsccQuicksightAgentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightAgentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags">DataAwsccQuicksightAgentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightAgentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags">DataAwsccQuicksightAgentTags</a>

---



